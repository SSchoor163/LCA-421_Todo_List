import { Component, OnInit } from '@angular/core';
import {ITodo} from '../../interfaces/itodo';
import {TodoService} from '../../services/todo.service';

@Component({
  selector: 'app-full-list',
  templateUrl: './full-list.component.html',
  styleUrls: ['./full-list.component.scss']
})
export class FullListComponent implements OnInit {
  title = 'Todos';
  todoList: ITodo [] = [];
  
  constructor(private TodoService: TodoService) { }

  ngOnInit() {
   
   this.todoList = this.TodoService.getTodoItems();
  }

}
