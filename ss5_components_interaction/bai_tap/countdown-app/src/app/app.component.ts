import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'countdown-app';

  time: number;

  startCountdown() {
    const interval = setInterval(() => {
      this.time--;
      if (this.time === 0) {
        clearInterval(interval);
      }
    }, 1000);
  }

  // stopCountdown() {
  //   const temp = this.time;
  //
  //   const interval = setInterval(() => {
  //     this.time = temp;
  //     clearInterval(interval);
  //   }, 1000);
  // }
}
