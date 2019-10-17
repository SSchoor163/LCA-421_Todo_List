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
  toggleTodoState(endLane:string, id: number):void{
    let change= this.todoList.find(t=>t.id===id);
    let index  = this.todoList.indexOf(change);
    
    if(endLane ==="Doing")
    {
      change.isDoing = true;
      change.isDone = false;
    }else if (endLane === "Done")
    {
      change.isDoing = false;
      change.isDone = true;
    }else console.log("Error, endlane cause no change" + change);
    
    //TODO check cosonle validation then remove when confirmed
    this.todoList[index] = change;
  }
}
