import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { MatDialog } from '@angular/material';

import { DataService } from './../services/data.service';
import { Wallet } from './../model/wallet';

import { CreateWalletDialogComponent } from './../create-wallet-dialog/create-wallet-dialog.component';

@Component({
  selector: 'app-wallets',
  templateUrl: './wallets.component.html',
  styleUrls: ['./wallets.component.css']
})
export class WalletsComponent implements OnInit {

  title = 'Wallets Component';

  wallet: Wallet = new Wallet;
  wallets: Wallet[];
  dialogRef: any;

  constructor(
    private dataService: DataService,
    public snackBar: MatSnackBar,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.wallets = this.dataService.getWallets();
  }

  openDialog(): void {
    this.dialogRef = this.dialog.open(CreateWalletDialogComponent, {
      width: '250px',
      data: this.wallet,
    });

    this.dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.addWallet(result);
      }
    });
  }

  addWallet(wallet: Wallet) {

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

