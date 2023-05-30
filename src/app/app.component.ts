import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  data = 9;

  updateData() {
    this.data = Math.floor(Math.random()*10);
  }
}
