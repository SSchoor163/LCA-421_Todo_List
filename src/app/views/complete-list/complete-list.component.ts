import { Component, OnInit } from '@angular/core';
import {ITodo} from '../../interfaces/itodo';
import {TodoService} from '../../services/todo.service';

@Component({
  selector: 'app-complete-list',
  templateUrl: './complete-list.component.html',
  styleUrls: ['./complete-list.component.scss']
})
export class CompleteListComponent implements OnInit {
  title = 'Todos';
  todoList: ITodo [] = [];
  constructor(private TodoService: TodoService) { }

  ngOnInit() {
    this.todoList = this.TodoService.getFinishedTodoItems();
  }

}
