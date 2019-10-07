import { Component, OnInit, Input } from '@angular/core';
import {ITodo} from '../interfaces/itodo';
import {TodoService} from '../services/todo.service';
import { RouterLink, RouterState, ActivatedRoute } from '@angular/router';
import {AppRoutingModule, } from '../app-routing.module';
import { Route } from '@angular/compiler/src/core';


@Component({
  selector: 'app-active-todo-modal',
  templateUrl: './active-todo-modal.component.html',
  styleUrls: ['./active-todo-modal.component.scss']
})
export class ActiveTodoModalComponent implements OnInit {
  @Input() todo;
   
  constructor(private TodoService: TodoService,
              private activatedRoute:ActivatedRoute,
              private route:Route) { }

  ngOnInit() {
  }

  toggleActiveTodo(todo:ITodo):void{
    this.TodoService.toggleActiveTodo(todo, todo.id);
    
    
  }

}
