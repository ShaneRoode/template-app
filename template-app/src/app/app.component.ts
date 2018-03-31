import { MessageService } from './services/message.service';
import { Subscription } from 'rxjs/Subscription';

import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'app works!';
  disabled = false;

  subscription: Subscription;
  menuStatus: any;

  constructor(private messageService: MessageService) {
    // subscribe to menu staus
    this.subscription = this.messageService
      .getMenuStatus()
      .subscribe(s => {
        this.menuStatus = s;
      });
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}
