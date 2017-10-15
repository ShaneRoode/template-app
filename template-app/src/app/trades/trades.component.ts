import { CreateTradeDialogComponent } from './../create-trade-dialog/create-trade-dialog.component';
import { MatSnackBar, MatDialog } from '@angular/material';
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
  dialogRef: any;

  constructor(
    private dataService: DataService,
    public snackBar: MatSnackBar,
    public dialog: MatDialog) { }

  ngOnInit() {
    // this.trades = this.dataService.getTrades();
    this.trade = this.initTrade();
    if (this.trades) {
      return;
    }
    this.trades = new TradesDataSource(this.tradeDatabase);
  }

  openDialog(): void {
    this.dialogRef = this.dialog.open(CreateTradeDialogComponent, {
      width: '250px',
      data: this.trade,
    });

    this.dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.addTrade(result);
      }
    });
  }

  addTrade(trade: Trade) {
    //this.trades.next(trade);
    this.trade = this.initTrade();
    this.openSnackBar('wallet added', 'Undo');
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
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
}

