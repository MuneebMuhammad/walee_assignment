import { Injectable } from '@angular/core';
import { takeUntil } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  private baseUrl = 'http://localhost:3000';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  // return list of all the students registered
  getStudents() {
    return this.httpClient.get(this.baseUrl + '/getUsers');
  }

  authenticateAdmin(u: string, p: string) {
    let correctUser = false;
    return this.httpClient.post(
      this.baseUrl + '/login',
      { u: u, p: p },
      this.httpOptions
    );
  }

  registerStudent(name: string, contact: string) {
    console.log('in register student fucntion');
    return this.httpClient.post(
      this.baseUrl + '/registerStudent',
      { name, contact },
      this.httpOptions
    );
  }

  deleteStudent(cms: number) {
    console.log('in student delete function: ', cms);
    return this.httpClient.delete(
      this.baseUrl + '/deleteStudent/' + cms,
      this.httpOptions
    );
  }

  updateStudentInfo(name: string, cms: number, batch: number, contact: string) {
    console.log('in update function');
    return this.httpClient.put(
      this.baseUrl + '/updateStudentInfo',
      { name, cms, batch, contact },
      this.httpOptions
    );
  }

  getTodos(cms: number) {
    console.log('in get todos function');
    return this.httpClient.get(this.baseUrl + '/getTodos/' + cms);
  }

  addTodo(cms: number, todoName: string) {
    console.log('in add todo function');
    return this.httpClient.put(this.baseUrl + '/addTodo/' + cms, { todoName });
  }

  changeTodo(cms: number, todoId: string, todoStatus: boolean) {
    console.log('todoStatus: ', todoStatus);
    return this.httpClient.put(this.baseUrl + '/changeTodo/' + cms, {
      todoId,
      todoStatus,
    });
  }

  deleteTodo(cms: number, todoId: string) {
    return this.httpClient.put(this.baseUrl + '/deleteTodo/' + cms, { todoId });
  }
}
