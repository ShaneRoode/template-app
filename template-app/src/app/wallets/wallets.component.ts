import { Component, OnInit } from '@angular/core';
import { MdSnackBar } from '@angular/material';

import { DataService } from './../services/data.service';
import { Wallet } from './../model/wallet';

@Component({
  selector: 'app-wallets',
  templateUrl: './wallets.component.html',
  styleUrls: ['./wallets.component.css']
})
export class WalletsComponent implements OnInit {

  title = 'Wallets Component';

  wallet: Wallet = new Wallet;
  wallets: Wallet[];

  constructor(private dataService: DataService, public snackBar: MdSnackBar) { }

  ngOnInit() {
    this.wallets = this.dataService.getWallets();
  }

  addWallet() {

    const wallet = new Wallet();
    wallet.name = this.wallet.name;
    wallet.units = this.wallet.units;
    wallet.id = this.wallet.id;

    this.wallets.push(wallet);
    this.wallet = new Wallet;
    this.openSnackBar('wallet added', 'Undo');
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
