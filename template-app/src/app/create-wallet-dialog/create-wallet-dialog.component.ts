import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Wallet } from './../model/wallet';

@Component({
  selector: 'app-create-wallet-dialog',
  templateUrl: './create-wallet-dialog.component.html',
  styleUrls: ['./create-wallet-dialog.component.css']
})
export class CreateWalletDialogComponent {

  wallet: Wallet;
  constructor(
    public dialogRef: MatDialogRef<CreateWalletDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Wallet) {
    this.wallet = data;
  }

  addWallet() {
    this.dialogRef.close(this.wallet);
  }

  close (){
    this.dialogRef.close();
  }
  onNoClick(): void {
    this.close();
  }

}
