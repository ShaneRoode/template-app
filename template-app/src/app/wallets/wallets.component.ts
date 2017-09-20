import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wallets',
  host: { class: 'grid-element main' },
  templateUrl: './wallets.component.html',
  styleUrls: ['./wallets.component.css']
})
export class WalletsComponent implements OnInit {

  title = 'Wallets Component';

  constructor() { }

  ngOnInit() {
  }

}
