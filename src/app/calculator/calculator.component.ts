import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  inputValue: string = '';
  result: number | string = '';

  calculate() {
    try {
      this.result = eval(this.inputValue);
    } catch (error) {
      this.result = 'Error';
    }
  }
}
