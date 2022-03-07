import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit, OnChanges {

  @Input()
  childTimeValue: number;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (const property in changes) {
      if (property === 'childTimeValue') {
        console.log('Previous: ', changes[property].previousValue);
        console.log('Current: ', changes[property].currentValue);
        console.log('First Change: ', changes[property].firstChange);
      }
    }
  }

}
