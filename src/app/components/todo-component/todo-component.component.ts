import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import { todo_item } from '../modules/todo';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-todo-component',
  templateUrl: './todo-component.component.html',
  styleUrls: ['./todo-component.component.css']
})
export class TodoComponentComponent implements OnInit {
  @Input() todo:todo_item;
  @Output() deleteTodo : EventEmitter<todo_item>=new EventEmitter();
  constructor(private todoservice:TodoService) { }

  ngOnInit() {
  }
  setClasses() {
    let classes={
      todo: true,
      'is-complete': this.todo.checkpoint
      
    }
    return classes;
  }
  ontoggle(todo){
    todo.checkpoint=!todo.checkpoint;
    // toggle on server 
    this.todoservice.togglecompleted(todo).subscribe(todo=>console.log(todo));

  }
  delete(todo){
    this.deleteTodo.emit(todo);

  }

}
