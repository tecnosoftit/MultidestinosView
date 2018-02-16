import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(router: Router, title: Title) {
    router.events.subscribe((event) => {
      title.setTitle(router.url.replace('/', '') + ' - Multidestinos Express');
    });
  }

  ngOninit() {
  }
}
