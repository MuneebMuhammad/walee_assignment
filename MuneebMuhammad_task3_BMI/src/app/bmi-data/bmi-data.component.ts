import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { OutletContext } from '@angular/router';
import { BmiService } from '../bmi.service';

@Component({
  selector: 'app-bmi-data',
  templateUrl: './bmi-data.component.html',
  styleUrls: ['./bmi-data.component.css'],
})
export class BmiDataComponent implements OnInit {
  weight?: number;
  height?: number;
  name?: string;
  bmi: number = 0;
  @Output() bmiEvent = new EventEmitter<number>();

  constructor(private bmiService: BmiService) {}

  ngOnInit(): void {}

  calculate_bmi(): void {
    if (!this.weight || !this.height || !this.name) {
      alert('Fill all fields');
    } else {
      this.bmi = parseFloat(
        ((703 * this.weight) / this.height ** 2).toFixed(2)
      );
      this.bmiEvent.emit(this.bmi);
      this.bmiService.addBmi(this.name, this.bmi, this.weight, this.height);
    }
  }
}
