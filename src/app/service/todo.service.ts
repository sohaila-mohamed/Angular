import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { todo_item } from '../components/modules/todo';

const httpOptions ={
  headers : new HttpHeaders({'Content-Type':'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoUrl:string='http://localhost:3000/todos';

  constructor(private http:HttpClient) { }
  gettodos():Observable<todo_item[]>{
    return this.http.get<todo_item[]>(this.todoUrl);
       
     
  }
  // toggle completed
  togglecompleted(todo:todo_item):Observable<any>{
    const url=`${this.todoUrl}/${todo.id}`;
    return this.http.put(url,todo,httpOptions);



  }
  deleteTodo(todo:todo_item):Observable<todo_item>{
    const url=`${this.todoUrl}/${todo.id}`;
    return this.http.delete<todo_item>(url,httpOptions);

  }
  addTodo(todo:todo_item):Observable<todo_item>{
    return this.http.post<todo_item>(this.todoUrl,todo,httpOptions);
  }

}
