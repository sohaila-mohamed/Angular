import { Component, OnInit } from '@angular/core';
import { todo_item } from '../modules/todo';
import { TodoService } from 'src/app/service/todo.service';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  Todos:todo_item[];

  constructor(private todoservice:TodoService) { }

  ngOnInit() {
    this.todoservice.gettodos().subscribe(Todos=>{
      this.Todos=Todos;
    });
    
  }
  deleteTodo(todo:todo_item){
    console.log("deleteTodo");
    this.Todos=this.Todos.filter(t => t.id !== todo.id);
    this.todoservice.deleteTodo(todo).subscribe();

  }

}
