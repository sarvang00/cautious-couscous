import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Todo } from '../model/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[] = new Array();
  constructor() {
    this.todos = [
      {
        id: '111',
        title: "Learn C++",
        isComplete: true,
        date: new Date(),
      },
      {
        id: '222',
        title: "Learn Golang",
        isComplete: true,
        date: new Date(),
      },
      {
        id: '333',
        title: "Learn Angular",
        isComplete: true,
        date: new Date(),
      },
    ];
   }
  
   getTodos() {
     return of(this.todos)
   }

   addTodo(todo: Todo) {
     this.todos.push(todo)
   }

   changeTodoStatus(todo: Todo) {
     this.todos.map( singeTodo => {
       if (singeTodo.id == todo.id) {
         singeTodo.isComplete = !singeTodo.isComplete;
       }
     });
   }

   deleteTodo(todo: Todo) {
     const indexOfTodo = this.todos.findIndex(
       (currentObj) => currentObj.id === todo.id
     );
     this.todos.splice(indexOfTodo, 1);
   }
}
