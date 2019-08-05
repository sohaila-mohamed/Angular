import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http:HttpClient) { }
  gettodos(){
    return[
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
