import { Component, Output } from '@angular/core';
import {TodoService} from './services/todo.service';
import {AppRoutingModule} from './app-routing.module';
import {ITodo} from './interfaces/itodo';
  import { from } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Todos';
  todoList: ITodo [] = [];
  todoTitle: string;
  todoId: number;
  constructor(private TodoService: TodoService){
   
  }
  ngOnInit(){
    this.TodoService.addTodoItem({id: 0, title: 'cook fett', isDone: false,isDoing: true, isEditing: false },);
    this.TodoService.addTodoItem({id: 0, title: 'cook cava', isDone: true,isDoing: false, isEditing: false },);
    this.TodoService.addTodoItem({id: 0, title: 'cook pappadelli', isDone: false,isDoing: true, isEditing: false },);
  }
  

addTodo():void{
  this.TodoService.addTodoItem({
    id: this.todoId,
    title:this.todoTitle,
    isDone:false,
    isDoing: false,
    isEditing: false
  });
  this.todoTitle="";
  this.todoId++;
}
deleteTodo(todo:ITodo){
  this.TodoService.deleteTodoItem(todo, todo.id)
}

}

