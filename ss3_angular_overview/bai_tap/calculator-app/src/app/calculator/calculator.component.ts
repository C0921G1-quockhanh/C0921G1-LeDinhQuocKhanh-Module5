import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  firstNum: number;
  secondNum: number;
  result: number;

  constructor() { }

  ngOnInit(): void {
  }

  calculateResult(operation) {
    switch (operation) {
      case '+':
        this.result = Number(this.firstNum) + Number(this.secondNum);
        break;
      case '-':
        this.result = Number(this.firstNum) - Number(this.secondNum);
        break;
      case '*':
        this.result = Number(this.firstNum) * Number(this.secondNum);
        break;
      case '/':
        this.result = Number(this.firstNum) / Number(this.secondNum);
        break;
    }
  }
}
