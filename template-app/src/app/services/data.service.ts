import { Observable } from 'rxjs/Observable';
import { Wallet } from './../model/wallet';
import { Trade, TradeType, TradesDataSource } from './../model/trade';
import { BTCMarketsCSV } from './../model/api';
import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';

@Injectable()
export class DataService {

  wallets: Wallet[];
  btcMarketsCSV: BTCMarketsCSV[];

  constructor(private localStorageService: LocalStorageService) {
    this.setWallets();
  }

  setWallets() {

    const wallet1 = new Wallet;
    wallet1.id = 1;
    wallet1.name = 'BitCoin';
    wallet1.units = 0.5031221;

    const wallet2 = new Wallet;
    wallet2.id = 2;
    wallet2.name = 'Neo';
    wallet2.units = 285.5031221;

    const wallets = [wallet1, wallet2];

    localStorage.setItem(LocalStorageKey.wallets.toString(), JSON.stringify(wallets));
  }

  getWallets(): Wallet[] {
    return JSON.parse(localStorage.getItem(LocalStorageKey.wallets.toString()));
  }

  delete(key: LocalStorageKey) {
    this.localStorageService.remove(key.toString());
  }

  getBTCMarketsCSV(): BTCMarketsCSV[] {
    if (!this.btcMarketsCSV) {
      // const data: BTCMarketsCSV = JSON.parse('[{}]'); Type of storage
      // debugger;
      // const data = 
      this.btcMarketsCSV = JSON.parse(
        this.localStorageService.get(LocalStorageKey.btcMarketsCSV.toString())
      );
      // Might need to set a mock here
    }

    return this.btcMarketsCSV;
  }

  setBTCMarketsCSV(data: BTCMarketsCSV[]): boolean {
    return this.localStorageService.set(LocalStorageKey.btcMarketsCSV.toString(), data);
  }

  save(key: LocalStorageKey, val) {
    // Returns true if good
    return this.localStorageService.set(key.toString(), val);
  }
}

export enum LocalStorageKey {
  wallets,
  btcMarketsCSV
}
