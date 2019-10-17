import { Component, OnInit, Input } from '@angular/core';
import {ITodo} from '../interfaces/itodo';
import {TodoService} from '../services/todo.service';
import { RouterLink, RouterState, ActivatedRoute } from '@angular/router';
import {AppRoutingModule, } from '../app-routing.module';
import { Route } from '@angular/compiler/src/core';
import { DataLinkService } from '../services/data-link.service';


@Component({
  selector: 'app-active-todo-modal',
  templateUrl: './active-todo-modal.component.html',
  styleUrls: ['./active-todo-modal.component.scss']
})
export class ActiveTodoModalComponent implements OnInit {
  @Input() todo:ITodo;
   
  constructor(private TodoService: TodoService, private comm:DataLinkService) { }

  ngOnInit() {
  }

  toggleActiveTodo():void{
    this.TodoService.toggleTodoState("Doing",this.todo.id);
    this.comm.resetView();
    
  }

}
