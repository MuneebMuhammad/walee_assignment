import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos?: any;
  cms?: any;
  newTodo?: string;

  constructor(
    private backendService: BackendService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.cms = this.route.snapshot.paramMap.get('cms');
    this.get_todos();
  }

  get_todos(): void {
    this.backendService.getTodos(this.cms).subscribe((r) => {
      this.todos = r;
      this.todos.reverse();
      console.log('todos: ', this.todos);
    });
  }

  add_todo(): void {
    if (this.newTodo) {
      console.log('cms: ', this.cms, ' . todo: ', this.newTodo);
      this.backendService
        .addTodo(this.cms, this.newTodo)
        .subscribe((r) => this.get_todos());
    }
  }

  change_todo_status(todoId: any, currentTodoStatus: boolean): void {
    this.backendService
      .changeTodo(this.cms, todoId, currentTodoStatus)
      .subscribe((r) => {
        this.get_todos();
      });
  }

  delete_todo(todoId: string): void {
    this.backendService
      .deleteTodo(this.cms, todoId)
      .subscribe((r) => this.get_todos());
  }
}
