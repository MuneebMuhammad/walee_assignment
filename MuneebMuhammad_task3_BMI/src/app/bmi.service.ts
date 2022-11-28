import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { BMI } from './bmi';

@Injectable({
  providedIn: 'root',
})
export class BmiService {
  bmi_data: BMI[] = [];

  constructor() {
    if (localStorage['bmi_data'] != undefined) {
      this.bmi_data = JSON.parse(localStorage['bmi_data']);
    }
  }

  addBmi(n: string, b: number, w: number, h: number): void {
    const single_data: BMI = {
      name: n,
      bmi: b,
      weight: w,
      height: h,
    };
    this.bmi_data.push(single_data);
    localStorage.setItem('bmi_data', JSON.stringify(this.bmi_data));
  }
  get_bmis() {
    if (localStorage['bmi_data'] == undefined) {
      return -1;
    }
    var mydata = JSON.parse(localStorage['bmi_data']);
    return mydata;
  }
}
