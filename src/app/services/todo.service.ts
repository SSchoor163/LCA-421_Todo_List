import { Injectable } from '@angular/core';
import {ITodo} from '../interfaces/itodo';
  import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoList:ITodo [] = [];
  constructor() { }

  getTodoItems(){

    return this.todoList;
  }
  getActiveTodoItems(){
    const Active = this.todoList.filter(t=>t.isDoing);
    return Active;
  }
  getFinishedTodoItems(){
    const finished = this.todoList.filter(t=>t.isDone);
    return finished;
  }
  getTodoItem(id: number):ITodo{
    const index = this.todoList.findIndex(todoItem=> todoItem.id === id);
    return this.todoList[index];
  }
  
  addTodoItem(todo: ITodo):void {
    this.todoList.push({
      id: todo.id,
      title: todo.title,
      isDone: todo.isDone,
      isDoing: todo.isDoing,
      isEditing: todo.isEditing,
    });
  }

  deleteTodoItem(todo: ITodo, id: number):void{
    console.log("delete method was called in todo servcices");
    const index  = this.todoList.findIndex(todoItem=>todoItem.id===id);
    this.todoList.splice(index,1);
  }
  toggleActiveTodo(todo: ITodo, id: number):void{
    const change= this.todoList.find(t=>t.id===id);
    if(todo.isDoing) change.isDoing=false;
    else change.isDoing=true;
  }
}
