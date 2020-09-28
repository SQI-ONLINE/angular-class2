import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {

  constructor(public actRoute: ActivatedRoute) { }

  public todo = {item: "Eat", time: "1:48 PM"}
  ngOnInit(): void {
    let todoIndex = this.actRoute.snapshot.params.index;
    let todos = JSON.parse(localStorage.getItem('todos'));
    
    this.todo = todos[todoIndex];
    // this.actRoute.paramMap.subscribe(params => {
    //   params.get('index')
    // })
  }

}
