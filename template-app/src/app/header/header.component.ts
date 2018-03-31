import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnDestroy {
  subscription: Subscription;
  menuStatus: any;

  constructor(private messageService: MessageService) {
    // subscribe to menu staus
    this.subscription = this.messageService.getMenuStatus().subscribe(s => { this.menuStatus = s; });
  }

  toggleMenu(): void{
    this.messageService.toggleMenu();
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

}


