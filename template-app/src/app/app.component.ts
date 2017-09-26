import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  navOpen = true;

  toggleNav(): void {
    console.log('toggleNav: ', this.navOpen);
  }
}
