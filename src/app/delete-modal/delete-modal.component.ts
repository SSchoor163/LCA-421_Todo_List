import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap'
import {TodoService} from '../services/todo.service';
import {ITodo}from '../interfaces/itodo';
  import { from } from 'rxjs';
import { stringify } from 'querystring';
import { debug } from 'util';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss']
})
export class DeleteModalComponent implements OnInit {
  @Input() todo;
  closeResult: string;

  constructor(private modalService: NgbModal,
              private TodoService: TodoService) {   }
  
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  ngOnInit() {
  }

  deleteTodo(todo:ITodo){
    console.log("Delete button in modal was clicked: " + todo);
    this.TodoService.deleteTodoItem(todo, todo.id);
    this.modalService.dismissAll();
  }
}
