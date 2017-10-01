import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  test = 'this is the data service';

  constructor() { }

  getData(): string {
    return this.test;
  }

}
