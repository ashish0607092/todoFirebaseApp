import { Component, OnInit } from "@angular/core";
import { Todo } from "../store/todo.model";

import { Select } from "@ngxs/store";
import { TodoState } from "../store/todo.state";
import { AddTodo } from "../store/todo.actions";
import { Store } from "@ngxs/store";
import { v4 as uuid } from "uuid";
import { Chance } from "chance";
import { CreateTodoComponent } from "../create-todo/create-todo.component";
import { MatDialog } from "@angular/material";
@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.scss"]
})
export class TodoListComponent implements OnInit {
  chance = new Chance();
  todoList: Todo[] = [];
  @Select(TodoState.getTodos) todos$;
  constructor(private store: Store, private dialog: MatDialog) {}

  ngOnInit() {
    this.todos$.subscribe(val => {
      this.todoList = val.todos;
    });
  }
  openCreateTodo(): void {
    const dialogRef = this.dialog.open(CreateTodoComponent, {
      width: "500px"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
  }
}
