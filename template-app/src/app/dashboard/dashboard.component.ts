import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  host: { class: 'grid-element main' },
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  title = 'Dashboard Component';

  constructor() { }

  ngOnInit() {
  }

}
