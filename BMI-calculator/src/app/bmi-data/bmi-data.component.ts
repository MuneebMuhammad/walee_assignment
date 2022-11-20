import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { OutletContext } from '@angular/router';

@Component({
  selector: 'app-bmi-data',
  templateUrl: './bmi-data.component.html',
  styleUrls: ['./bmi-data.component.css'],
})
export class BmiDataComponent implements OnInit {
  weight?: number;
  height?: number;
  bmi: number = 0;
  @Output() bmiEvent = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  calculate_bmi(): void {
    if (!this.weight || !this.height) {
      alert('fill both weight and height fields');
    } else {
      this.bmi = parseFloat(
        ((703 * this.weight) / this.height ** 2).toFixed(2)
      );
      this.bmiEvent.emit(this.bmi);
    }
  }
}
