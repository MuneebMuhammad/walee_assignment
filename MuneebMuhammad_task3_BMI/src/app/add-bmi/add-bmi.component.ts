import { Component, OnInit } from '@angular/core';
import { BmiService } from '../bmi.service';

@Component({
  selector: 'app-add-bmi',
  templateUrl: './add-bmi.component.html',
  styleUrls: ['./add-bmi.component.css'],
})
export class AddBmiComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  bmi = 0;
  onBmiCalculate(bmi: number) {
    this.bmi = bmi;
  }
}
