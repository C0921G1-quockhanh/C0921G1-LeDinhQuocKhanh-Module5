import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-rating-bar',
  templateUrl: './rating-bar.component.html',
  styleUrls: ['./rating-bar.component.css']
})
export class RatingBarComponent implements OnInit {

  ratingValues: number[] = [1,2,3,4,5,6,7,8,9,10];

  ratingValue: number;

  @Output()
  valueChanged: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  getValue(value) {
    this.ratingValue = value;
    this.valueChanged.emit(this.ratingValue);
  }

}
