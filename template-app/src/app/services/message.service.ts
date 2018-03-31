import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MessageService {
  private subject = new Subject<any>();
  private menuStatus = true;

  toggleMenu() {
    this.subject.next(!this.menuStatus);
  }

  getMenuStatus(): Observable<any> {
    return this.subject.asObservable();
  }
}