import { Injectable } from '@angular/core';

import { Wallet } from './../model/wallet';
import { Trade, TradeType, TradesDataSource } from './../model/trade';

@Injectable()
export class DataService {

  wallets: Wallet[];

  constructor() {
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

}

enum LocalStorageKey {
  wallets
}


