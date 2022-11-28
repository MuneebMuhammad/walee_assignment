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
  registerSuccess = false;
  registerError = false;
  updateInfoSuccess = false;
  updateInfoError = false;

  nameUpdata = '';
  contactUpdata = '';
  batchUpdate?: number;
  cmsUpdate?: number;

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
  }

  handleAddStudent() {
    if (this.name != '' && this.contact != '') {
      console.log('allow');
      this.backendService
        .registerStudent(this.name, this.contact)
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

  handleEditInfo(name: string, cms: number, batch: number, contact: string) {
    this.nameUpdata = name;
    this.batchUpdate = batch;
    this.contactUpdata = contact;
    this.cmsUpdate = cms;
  }

  handleSubmitUpdate() {
    if (
      this.nameUpdata &&
      this.batchUpdate &&
      this.contactUpdata &&
      this.cmsUpdate
    ) {
      this.backendService
        .updateStudentInfo(
          this.nameUpdata,
          this.cmsUpdate,
          this.batchUpdate,
          this.contactUpdata
        )
        .subscribe(() => {
          this.getAllStudents();
          this.updateInfoSuccess = true;
        });
    }
  }
}
