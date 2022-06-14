import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-todo-list',
  templateUrl: './all-todo-list.component.html',
  styleUrls: ['./all-todo-list.component.css']
})
export class AllTodoListComponent implements OnInit {

  todoList=[
    {
      todo:"create a todo list 1 for test",
      priority:"High",
      dueDate:"23 Nov, 2021",
      createdBy:"AAA",
      assignedTo:"BBB",
      actor:""
  },
  {
    todo:"create a todo list 2 for test",
    priority:"Medium",
    dueDate:"23 Nov, 2021",
    createdBy:"AAA",
    assignedTo:"BBB",
    actor:""
},
{
  todo:"create a todo list 3 for test",
  priority:"Medium",
  dueDate:"23 Nov, 2021",
  createdBy:"AAA",
  assignedTo:"BBB",
  actor:""
},
{
  todo:"create a todo list 4 for test",
  priority:"Low",
  dueDate:"23 Nov, 2021",
  createdBy:"AAA",
  assignedTo:"BBB",
  actor:""
}
]
  constructor() { }

  ngOnInit(): void {
  }

}
