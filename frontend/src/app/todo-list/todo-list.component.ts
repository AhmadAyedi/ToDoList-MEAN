// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { TodoService } from '../todo.service';

// @Component({
//   standalone: true,
//   selector: 'app-todo-list',
//   templateUrl: './todo-list.component.html',
//   styleUrls: ['./todo-list.component.css'],
//   imports: [CommonModule, FormsModule],
//   providers: [TodoService]
// })
// export class TodoListComponent implements OnInit {
//   todos: any[] = [];
//   task: string = '';

//   constructor(private todoService: TodoService) { }

//   async ngOnInit() {
//     this.todos = await this.todoService.getTodos();
//   }

//   async addTodo() {
//     if (this.task.trim()) {
//       const newTodo = await this.todoService.addTodo(this.task);
//       this.todos.push(newTodo);
//       this.task = '';
//     }
//   }

//   async updateTodo(todo: any) {
//     const updatedTodo = await this.todoService.updateTodo(todo._id, !todo.completed);
//     todo.completed = updatedTodo.completed;
//   }

//   async deleteTodo(id: string) {
//     await this.todoService.deleteTodo(id);
//     this.todos = this.todos.filter(todo => todo._id !== id);
//   }
// }

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { TodoService } from '../todo.service';

@Component({
  standalone: true,
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatListModule
  ],
  providers: [TodoService]
})
export class TodoListComponent implements OnInit {
  todos: any[] = [];
  task: string = '';

  constructor(private todoService: TodoService) { }

  async ngOnInit() {
    this.todos = await this.todoService.getTodos();
  }

  async addTodo() {
    if (this.task.trim()) {
      const newTodo = await this.todoService.addTodo(this.task);
      this.todos.push(newTodo);
      this.task = '';
    }
  }

  async updateTodo(todo: any) {
    const updatedTodo = await this.todoService.updateTodo(todo._id, !todo.completed);
    todo.completed = updatedTodo.completed;
  }

  async deleteTodo(id: string) {
    await this.todoService.deleteTodo(id);
    this.todos = this.todos.filter(todo => todo._id !== id);
  }
}
