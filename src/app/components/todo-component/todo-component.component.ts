import { Component, OnInit,Input } from '@angular/core';
import { todo_item } from '../modules/todo';
@Component({
  selector: 'app-todo-component',
  templateUrl: './todo-component.component.html',
  styleUrls: ['./todo-component.component.css']
})
export class TodoComponentComponent implements OnInit {
  @Input() todo:todo_item;
  constructor() { }

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

  }
  delete(todo){
    console.log("deleted");

  }

}
