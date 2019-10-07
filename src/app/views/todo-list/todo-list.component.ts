import { Component, OnInit } from '@angular/core';
import {ITodo} from '../../interfaces/itodo';
import {TodoService} from '../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  title = 'Todos';
  todoList: ITodo [] = [];
  constructor(private TodoService: TodoService) { }

  ngOnInit() {
  
    this.todoList = this.TodoService.getActiveTodoItems();
  }

}
