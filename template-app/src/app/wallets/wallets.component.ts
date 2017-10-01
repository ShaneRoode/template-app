import { Component, OnInit } from '@angular/core';

import { DataService } from './../services/data.service';
import { Wallet } from './../model/wallet';

@Component({
  selector: 'app-wallets',
  host: { class: 'grid-element main' },
  templateUrl: './wallets.component.html',
  styleUrls: ['./wallets.component.css']
})
export class WalletsComponent implements OnInit {

  title = 'Wallets Component';

  wallet: Wallet = new Wallet;
  wallets: Wallet[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.wallets = this.getWallets();
  }

  getWallets(): Wallet[] {

    const wallet1 = new Wallet;
    wallet1.id = 1;
    wallet1.name = 'BitCoin';
    wallet1.units = 0.5031221;

    const wallet2 = new Wallet;
    wallet2.id = 2;
    wallet2.name = 'Neo';
    wallet2.units = 285.5031221;

    return [
      wallet1,
      wallet2
    ];
  }

  addWallet() {

    const wallet = new Wallet();
    wallet.name = this.wallet.name;
    wallet.units = this.wallet.units;
    console.log(wallet);
    this.wallets.push(wallet);
    this.wallet = new Wallet;
  }

}
