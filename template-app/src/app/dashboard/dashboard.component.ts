import { Portfolio, Asset } from './../model/portfolio';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  title = 'Dashboard';
  portfolio: Portfolio;

  constructor() { }

  ngOnInit() {
    this.portfolio = new Portfolio();

    this.portfolio.name = 'Total Value';
    this.portfolio.total = 2658.02;
    this.portfolio.units = 0.43204944;
    this.portfolio.assets = [
      new Asset('BTC', 'Bitcoin', 0.31650819, 1858.15, -12),
      new Asset('ETH', 'Etherum', 0.725789209, 281.64, -12),
      new Asset('LTC', 'Litecoin', 17.95568622, 1166.22, -12),
      new Asset('OMG', 'OmiseGO', 24.99, 255.65, -12),
    ];
  }

}

