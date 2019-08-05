import { Component, OnInit } from '@angular/core';
import { todo_item } from '../modules/todo';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  Todos:todo_item[];

  constructor() { }

  ngOnInit() {
    this.Todos=[
      {
        id:1,
        title:'one',
        checkpoint:false
      },
      {
        id:2,
        title:'two',
        checkpoint:false
      },
      {
        id:3,
        title:'three',
        checkpoint:false
      }
      
    ]
    
  }

}
