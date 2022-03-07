import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rating-bar-child-to-parent';

  parentValue: number;

  getValueHandler(value: number) {
    this.parentValue = value;
  }
}
