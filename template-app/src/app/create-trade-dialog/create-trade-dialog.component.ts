import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Trade } from './../model/trade';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-create-trade-dialog',
  templateUrl: './create-trade-dialog.component.html',
  styleUrls: ['./create-trade-dialog.component.css']
})
export class CreateTradeDialogComponent {

  trade: Trade;

  constructor(public dialogRef: MatDialogRef<CreateTradeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Trade) {
    this.trade = data;
  }

  addTrade() {
    this.dialogRef.close(this.trade);
  }

  close() {
    this.dialogRef.close();
  }
  onNoClick() {
    this.close();
  }
}
