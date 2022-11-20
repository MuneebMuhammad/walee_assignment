import { Component, OnInit } from '@angular/core';
import { BmiService } from '../bmi.service';
import { BMI } from '../bmi';

@Component({
  selector: 'app-show-all-bmis',
  templateUrl: './show-all-bmis.component.html',
  styleUrls: ['./show-all-bmis.component.css'],
})
export class ShowAllBmisComponent implements OnInit {
  bmi_data: BMI[] = [];
  show: boolean = true;

  constructor(private bmiService: BmiService) {}

  ngOnInit(): void {
    this.bmi_data = this.bmiService.get_bmis();
    if (localStorage.length == 0) {
      this.show = false;
    }
  }
  delete_cache(): void {
    localStorage.clear();
    location.reload();
  }
}
