import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  myData: Array<any>;
  gettingData: boolean;

  constructor(private http: Http) { }

  ngOnInit() {
    console.log('myData', this.myData);
    if (this.myData) { return; }

    this.getDummyData();
  }

  getDummyData() {
    console.log('getDummyData', this.myData);
    this.gettingData = true;
    this.http.get('https://jsonplaceholder.typicode.com/photos')
      .map(response => response.json())
      .subscribe(res => this.myData = res)
      .add(() => this.gettingData = false);
  }
}
