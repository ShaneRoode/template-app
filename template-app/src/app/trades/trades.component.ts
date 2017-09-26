import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trades',
  host: { class: 'grid-element main' },
  templateUrl: './trades.component.html',
  styleUrls: ['./trades.component.css']
})
export class TradesComponent implements OnInit {

  title = 'Trades Component';

  constructor() { }

  ngOnInit() {
  }

}
