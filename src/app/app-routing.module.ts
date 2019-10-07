import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodoListComponent} from './views/todo-list/todo-list.component';
import {CompleteListComponent} from './views/complete-list/complete-list.component';
import {FullListComponent} from './views/full-list/full-list.component';



const routes: Routes = [ 
  { path: 'all', component: FullListComponent },
  {path: 'done', component: CompleteListComponent},
  {path: 'todo', component: TodoListComponent},
  {path: '', component: FullListComponent}
   ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [FullListComponent, CompleteListComponent, TodoListComponent];
