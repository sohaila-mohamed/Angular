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
    this.todoservice.deleteTodo(todo).subscribe();
    this.Todos=this.Todos.filter(t => t.title !== todo.title);
    

  }
  addtodo(todo:todo_item){
    
    this.todoservice.addTodo(todo).subscribe(todo=>{
      this.Todos.push(todo);
    });
    
    console.log(todo.title);

  }

}
