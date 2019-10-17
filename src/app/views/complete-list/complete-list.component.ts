import { Component, OnInit, AfterViewChecked } from '@angular/core';
import {ITodo} from '../../interfaces/itodo';
import {TodoService} from '../../services/todo.service';
import { DataLinkService } from 'src/app/services/data-link.service';

@Component({
  selector: 'app-complete-list',
  templateUrl: './complete-list.component.html',
  styleUrls: ['./complete-list.component.scss']
})
export class CompleteListComponent implements OnInit, AfterViewChecked {
  title = 'Todos';
  todoList: ITodo [] = [];
  constructor(private TodoService: TodoService, private comm:DataLinkService) { }

  ngOnInit() {
    this.todoList = this.TodoService.getFinishedTodoItems();
  }
  ngAfterViewChecked(){
    
  }
  resetList(){
    this.todoList = this.TodoService.getFinishedTodoItems();
    
  }
}
