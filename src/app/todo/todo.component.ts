import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }

  public todo = "";
  public todoList = []
  ngOnInit(): void {
  }

  addTodo(){
    this.todoList.push(this.todo)
    console.log(this.todoList);
  }
}
