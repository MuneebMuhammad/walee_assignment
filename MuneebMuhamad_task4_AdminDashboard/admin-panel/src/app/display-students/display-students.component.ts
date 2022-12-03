import { Component, OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-display-students',
  templateUrl: './display-students.component.html',
  styleUrls: ['./display-students.component.css'],
})
export class DisplayStudentsComponent implements OnInit {
  students?: any;
  name = '';
  contact = '';
  password = '';
  registerSuccess = false;
  registerError = false;
  updateInfoSuccess = false;
  updateInfoError = false;
  batchYearError = false;
  contactError = false;

  nameUpdata = '';
  contactUpdata = '';
  batchUpdate?: number;
  cmsUpdate?: number;
  passwordUpdate = '';

  constructor(private backendService: BackendService) {}

  ngOnInit(): void {
    this.getAllStudents();
  }

  getAllStudents() {
    this.backendService.getStudents().subscribe((r) => (this.students = r));
  }

  promptOff() {
    this.registerError = false;
    this.registerSuccess = false;
    this.updateInfoError = false;
    this.updateInfoSuccess = false;
    this.batchYearError = false;
    this.contactError = false;
  }

  checkValidContact(num: string) {
    if (num[0] == '+' && num.length == 13) {
      return true;
    } else if (isNaN(Number(num[0])) == false && num.length == 11) {
      return true;
    }
    return false;
  }

  handleAddStudent() {
    this.contact = this.contact.replace(' ', '');
    if (this.name != '' && this.contact != '' && this.password != '') {
      console.log('allow');
      this.backendService
        .registerStudent(this.name, this.contact, this.password)
        .subscribe((r) => {
          this.getAllStudents();
          this.registerSuccess = true;
          this.registerError = false;
          this.name = '';
          this.contact = '';
        });
    } else {
      console.log('dontallow');
      this.registerError = true;
      this.registerSuccess = false;
    }
  }

  deleteStudent(cms: number) {
    this.backendService
      .deleteStudent(cms)
      .subscribe((r) => this.getAllStudents());
  }

  handleEditInfo(
    name: string,
    cms: number,
    batch: number,
    contact: string,
    password: string
  ) {
    this.nameUpdata = name;
    this.batchUpdate = batch;
    this.contactUpdata = contact.replace(' ', '');
    this.cmsUpdate = cms;
    this.passwordUpdate = password;
  }

  handleSubmitUpdate() {
    let currentYear = new Date().getFullYear();
    console.log('current year: ', currentYear);
    if (
      this.nameUpdata &&
      this.batchUpdate &&
      this.contactUpdata &&
      this.cmsUpdate
    ) {
      // if (!this.checkValidContact(this.contactUpdata)) {
      //   this.contactError = true;
      // }
      if (this.batchUpdate < 1980 || this.batchUpdate > currentYear) {
        this.batchYearError = true;
      }

      if (this.batchYearError == false && this.contactError == false) {
        this.backendService
          .updateStudentInfo(
            this.nameUpdata,
            this.cmsUpdate,
            this.batchUpdate,
            this.contactUpdata,
            this.passwordUpdate
          )
          .subscribe(() => {
            this.getAllStudents();
            this.updateInfoSuccess = true;
          });
      }
    }
  }
}
