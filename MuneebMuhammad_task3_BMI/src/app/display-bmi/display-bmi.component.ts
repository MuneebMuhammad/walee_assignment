import { Component, Input, OnInit } from '@angular/core';
import { BmiDataComponent } from '../bmi-data/bmi-data.component';

@Component({
  selector: 'app-display-bmi',
  templateUrl: './display-bmi.component.html',
  styleUrls: ['./display-bmi.component.css'],
})
export class DisplayBmiComponent implements OnInit {
  @Input() bmiVal?: number;
  constructor() {}

  ngOnInit(): void {}
}
