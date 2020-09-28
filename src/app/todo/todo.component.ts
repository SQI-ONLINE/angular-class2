import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(public router: Router) {}

  public todo = "";
  public todoList = []
  ngOnInit(): void {
    //SMILES
    //SMILES
    let list = JSON.parse(localStorage.getItem("todos"));
    if(list){
      this.todoList = list
    }else{
      this.todoList = [];
    }
  }

  addTodo(){
    let time = new Date() 
    let todoObject = {item: this.todo, time: time.toLocaleTimeString()}
    this.todoList.push(todoObject)
    localStorage.setItem("todos", JSON.stringify(this.todoList))
    console.log(this.todoList);
  }

  viewTodo(i){
    console.log(i);
    this.router.navigate([`/todos/details/${i}`])
  }
}
