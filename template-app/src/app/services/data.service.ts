import { Wallet } from './../model/wallet';
import { Trade } from './../model/trade';
import { TradeType } from './../model/trade';

import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  test = 'this is the data service';
  wallets: Wallet[];

  constructor() {
    this.setWallets();
  }

  getData(): string {
    return this.test;
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

  getTrades(): Trade[] {

    const trade1 = new Trade();
    trade1.type = TradeType.LimitBuy;
    trade1.openedDate = new Date();
    trade1.closedDate = new Date();
    trade1.bidAsk = 0.00514799;
    trade1.unitsFilled = 23.55976148;
    trade1.unitsTotal = 23.55976148;
    trade1.actualRate = 0.00514004;
    trade1.costProceeds = -0.12140109;

    const trade2 = new Trade();
    trade2.type = TradeType.LimitBuy;
    trade2.openedDate = new Date();
    trade2.closedDate = new Date();
    trade2.bidAsk = 0.00514799;
    trade2.unitsFilled = 23.55976148;
    trade2.unitsTotal = 23.55976148;
    trade2.actualRate = 0.00514004;
    trade2.costProceeds = -0.12140109;

    return [
      trade1,
      trade2
    ];
  }

}

enum LocalStorageKey {
  wallets
}
