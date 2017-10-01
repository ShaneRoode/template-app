import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';

import { DataService } from './../services/data.service';
import { Trade, TradesDataSource, TradeDatabase } from './../model/trade';

@Component({
  selector: 'app-trades',
  templateUrl: './trades.component.html',
  styleUrls: ['./trades.component.css']
})
export class TradesComponent implements OnInit {

  title = 'Trades';
  displayedColumns = [
    'id',
    'openedDate',
    'closedDate',
    'type',
    'bidAsk',
    'unitsFilled',
    'unitsTotal',
    'actualRate',
    'costProceeds'
  ];
  tradeDatabase = new TradeDatabase();
  trades: TradesDataSource | null;
  trade: Trade;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    // this.trades = this.dataService.getTrades();
    this.trade = this.initTrade();
    if (this.trades) {
      return;
    }
    this.trades = new TradesDataSource(this.tradeDatabase);
  }

  initTrade(): Trade {
    return {
      id: 0,
      openedDate: new Date(),
      closedDate: new Date(),
      type: 0,
      bidAsk: 0,
      unitsFilled: 0,
      unitsTotal: 0,
      actualRate: 0,
      costProceeds: 0,
    };
  }

  addTrade() {
    // this.trades.push(this.trade);
  }
}

