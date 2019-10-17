import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TodoService} from './services/todo.service';
  import { from } from 'rxjs';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import { ActiveTodoModalComponent } from './active-todo-modal/active-todo-modal.component';
import { RouterLink, RouterState } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    DeleteModalComponent,
    RoutingComponents,
    ActiveTodoModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
