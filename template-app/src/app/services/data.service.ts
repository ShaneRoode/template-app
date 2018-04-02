import { Observable } from 'rxjs/Observable';
import { Wallet } from './../model/wallet';
import { Trade, TradeType, TradesDataSource } from './../model/trade';
import { BTCMarketsCSV } from './../model/api';
import { Injectable, EventEmitter } from '@angular/core';
// import { LocalStorageService } from 'angular-2-local-storage';
// const { PouchDB } = require('pouchdb');
import PouchDB from 'pouchdb';

@Injectable()
export class DataService {

  wallets: Wallet[] = new Array();
  btcMarketsCSV: BTCMarketsCSV[];

  private isInstantiated: boolean;
  dataBase: any;
  private database: any;
  private listener: EventEmitter<any> = new EventEmitter();

  constructor() {
    if (this.getWallets().length === 0) {
      this.setWallets();
      console.log('set wallets');
      // this.database = new PouchDB('my_database');
      // console.log('my_database', this.dataBase);
      // this.isInstantiated = true;
    }
  }

  fetch() {
    return this.database.allDocs({ include_docs: true });
  }

  get(id: string) {
    return this.database.get(id);
  }

  put(id: string, document: any) {
    document._id = id;
    return this.get(id).then(result => {
      document._rev = result._rev;
      return this.database.put(document);
    }, error => {
      if (error.status === '404') {
        return this.database.put(document);
      } else {
        return new Promise((resolve, reject) => {
          reject(error);
        });
      }
    });
  }

  sync(remote: string) {
    const remoteDatabase = new PouchDB(remote);
    this.database.sync(remoteDatabase, {
      live: true
    }).on('change', change => {
      this.listener.emit(change);
    }).on('error', error => {
      console.error(JSON.stringify(error));
    });
  }

  getChangeListener() {
    return this.listener;
  }

  // =======

  setWallets() {

    const wallet1 = new Wallet;
    wallet1.id = 1;
    wallet1.name = 'BitCoin';
    wallet1.units = 0.5031221;

    const wallet2 = new Wallet;
    wallet2.id = 2;
    wallet2.name = 'Neo';
    wallet2.units = 285.5031221;

    const wallet3 = new Wallet;
    wallet3.id = 3;
    wallet3.name = 'icon';
    wallet3.units = 400;

    const wallets = [wallet1, wallet2, wallet3];

    localStorage.setItem(LocalStorageKey.wallets.toString(), JSON.stringify(wallets));
  }

  getWallets(): Wallet[] {
    this.wallets = JSON.parse(
      localStorage.getItem(LocalStorageKey.wallets.toString())
    );
    return this.wallets;
  }

  addWallets(wallet: Wallet) {
    // if (this.wallets.length === 0) {
    //   this.wallets = this.getWallets();
    // }
    // this.wallets.push(wallet);

    localStorage.setItem(
      LocalStorageKey.wallets.toString(), JSON.stringify(this.wallets)
    );
  }

  deleteWallet(wallet: Wallet) {

    const index = this.wallets.indexOf(wallet, 0);
    if (index > -1) {
      this.wallets.splice(index, 1);
    }

    localStorage.setItem(
      LocalStorageKey.wallets.toString(), JSON.stringify(this.wallets)
    );
  }

  delete(key: LocalStorageKey) {
    // this.localStorageService.remove(key.toString());
  }

  getBTCMarketsCSV(): BTCMarketsCSV[] {
    if (!this.btcMarketsCSV) {
      // const data: BTCMarketsCSV = JSON.parse('[{}]'); Type of storage
      // debugger;
      // const data =
      // this.btcMarketsCSV = JSON.parse(
      //   this.localStorageService.get(LocalStorageKey.btcMarketsCSV.toString())
      // );
      // Might need to set a mock here
    }

    return this.btcMarketsCSV;
  }

  // setBTCMarketsCSV(data: BTCMarketsCSV[]): boolean {
  //   return this.localStorageService.set(LocalStorageKey.btcMarketsCSV.toString(), data);
  // }

  // save(key: LocalStorageKey, val) {
  //   // Returns true if good
  //   return this.localStorageService.set(key.toString(), val);
  // }
}

export enum LocalStorageKey {
  wallets,
  btcMarketsCSV
}
