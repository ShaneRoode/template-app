import { Component, OnInit } from '@angular/core';

import { DataService } from './../services/data.service';
import { Trade } from './../model/trade';

@Component({
  selector: 'app-trades',
  host: { class: 'grid-element main' },
  templateUrl: './trades.component.html',
  styleUrls: ['./trades.component.css']
})
export class TradesComponent implements OnInit {

  title = 'Trades Component';
  trades: Trade[];
  trade: Trade = new Trade;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.trades = this.dataService.getTrades();
  }

  addTrade() {
    const trade = new Trade;
    trade.type = this.trade.type;
    trade.openedDate = new Date();
    trade.closedDate = new Date();
    trade.bidAsk = this.trade.bidAsk;
    trade.unitsFilled = this.trade.unitsFilled;
    trade.unitsTotal = this.trade.unitsTotal;
    trade.actualRate = this.trade.actualRate;
    trade.costProceeds = this.trade.costProceeds;

    this.trades.push(trade);
  }

}

