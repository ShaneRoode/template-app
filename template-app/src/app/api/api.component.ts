import { DataService, LocalStorageKey } from './../services/data.service';
import { BTCMarketsCSV } from './../model/api';
import { Component, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { Http } from '@angular/http';

import { Wallet } from './../model/wallet';
import { ApiDatabase, BTCMarketsDataSource } from 'app/model/api';
import { BittrexApiModule } from 'node-bittrex-api';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  blockExplorerAddrAPI = 'https://blockexplorer.com/api/addr/';
  blockExplorerTxAPI = 'https://blockexplorer.com/api/tx/';
  bitcoinWalletAddrKey = '';
  bitcoinWalletTxKey = '';
  bitcoinAddrData: any;
  bitcoinTxData: any;

  bittrexAPIURL = 'https://bittrex.com/api/v1.1/';
  bittrexAPIKey = '';
  bittrexAPISecret = '';

  btcMarketsCSVFile = 'tdl884vv4sb5fljqtuo7ah77o3.csv';
  csvData: any[] = [];
  displayedColumns = [];
  btcMarketsTrades: BTCMarketsDataSource | null;
  btcMarketTrade: BTCMarketsCSV;
  btcMarketsCSV: BTCMarketsCSV[];

  gettingData: boolean;

  constructor(private http: Http, private dataService: DataService) { }

  ngOnInit() {

    this.btcMarketsCSV = this.dataService.getBTCMarketsCSV();
    console.log('this.btcMarketsCSV', this.btcMarketsCSV);

    if (this.bitcoinWalletAddrKey) {
      this.getWalletData(this.bitcoinWalletAddrKey);
    }
    if (this.bittrexAPIKey) {
      this.setupBittrexAPI();
    }
    if (this.btcMarketsCSVFile) {
      this.getBTCMarketCSVData();
    }
  }

  getBittrexBalancesData(apiKey: string) {
    // this.gettingData = true;
    // BittrexApiModule.sendCustomRequest( 'http://bittrex.com/api/v1.1/public/getmarketsummary?market=btc-ltc', function( data ) {
    //   console.log( data );
    // }, true);
    // BittrexApiModule.getbalances((data, err) => {
    //   if (err) {
    //     return console.error(err);
    //   }
    //   console.log(data);
    // });
  }

  setupBittrexAPI() {
    BittrexApiModule.options({
      'apikey': this.bittrexAPIKey,
      'apisecret': this.bittrexAPISecret,
      'stream': false,
      'verbose': true,
      'cleartext': false
    });
    this.getBittrexBalancesData(this.bittrexAPIKey);
  }

  getBTCMarketCSVData() {
    this.gettingData = true;
    this.http.get('./assets/' + this.btcMarketsCSVFile)
      .subscribe(
      data => this.extractCSVData(data),
      err => this.handleError(err))
      .add(() => this.updateTrades())
      .add(() => this.gettingData = false);
  }

  updateTrades() {
    console.log('csvData: ', this.csvData);
    const saveResult = this.dataService.setBTCMarketsCSV(this.btcMarketsCSV);
    console.log('saveResult: ', saveResult);
    this.btcMarketsCSV = this.dataService.getBTCMarketsCSV();

    this.btcMarketsTrades = new BTCMarketsDataSource(new ApiDatabase(this.csvData));
    console.log('btcMarketsTrades: ', this.btcMarketsTrades);
  }

  getWalletData(address: string) {
    this.gettingData = true;
    this.http.get(this.blockExplorerAddrAPI + address)
      .map(response => response.json())
      .subscribe(res => this.bitcoinAddrData = res)
      .add(() => this.gettingData = false);
  }

  getWalletTransaction(txid: string) {
    this.gettingData = true;
    this.http.get(this.blockExplorerTxAPI + txid)
      .map(response => response.json())
      .subscribe(res => this.bitcoinTxData = res)
      .add(() => this.gettingData = false);
  }

  private extractCSVData(res: any) {

    const csvData = res['_body'] || '';
    const allTextLines = csvData.split(/\r\n|\n/);
    const headers = allTextLines[0].split(',');
    const lines = [];

    for (let i = 0; i < allTextLines.length; i++) {
      // split content based on comma
      const data = allTextLines[i].split(',');
      if (data.length === headers.length) {
        const tarr = [];
        for (let j = 0; j < headers.length; j++) {
          tarr.push(data[j]);
        }
        lines.push(tarr);
      }
    }

    const headersNoSpace = [];
    for (let i = 0; i < headers.length; i++) {
      headersNoSpace.push(headers[i].replace(/ /g, ''));
    }
    this.csvData = lines.splice(1, lines.length);
    this.displayedColumns = headersNoSpace;
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return errMsg;
  }
}
