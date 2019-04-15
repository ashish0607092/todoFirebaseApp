import { Component, OnInit } from "@angular/core";
import { Todo } from "../store/todo.model";

import { Select } from "@ngxs/store";
import { TodoState } from "../store/todo.state";
import { Store } from "@ngxs/store";
import { v4 as uuid } from "uuid";
import { Chance } from "chance";
import { CreateTodoComponent } from "../create-todo/create-todo.component";
import { MatTabChangeEvent } from "@angular/material";
import { MatDialog } from "@angular/material";
import {
  PushnotificationService,
  PushNotificationOptions
} from "../pushnotification.service";
@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.scss"]
})
export class TodoListComponent implements OnInit {
  chance = new Chance();
  todoList: Todo[] = [];
  @Select(TodoState.getActiveTodos) activeTodos$;
  @Select(TodoState.getCompletedTodos) completedTodos$;
  @Select(TodoState.getAllTodos) allTodos$;
  array = [
    { name: "ashish", age: 25 },
    { name: "zzzz", age: 15 },
    { name: "fffff", age: 56 },
    { name: "qqq", age: 12 },
    { name: "eee", age: 67 }
  ];

  tabs = [
    {
      name: "All"
    },
    {
      name: "Active"
    },
    {
      name: "Completed"
    }
  ];
  constructor(
    private store: Store,
    private dialog: MatDialog,
    private _pushNotificationService: PushnotificationService
  ) {}

  ngOnInit() {
    this._pushNotificationService.requestPermission();

    this.allTodos$.subscribe(val => {
      this.todoList = val;
    });
  }
  openCreateTodo(): void {
    const dialogRef = this.dialog.open(CreateTodoComponent, {
      width: "500px"
    });

    dialogRef.afterClosed().subscribe(result => {});
  }
  changeTab(event: MatTabChangeEvent) {
    switch (event.index) {
      case 0:
        this.allTodos$.subscribe(val => {
          this.todoList = val;
        });
        break;
      case 1:
        this.activeTodos$.subscribe(val => {
          this.todoList = val;
        });
        break;
      case 2:
        this.completedTodos$.subscribe(val => {
          this.todoList = val;
        });
        break;
    }
  }

  generateNotification() {
    const title = "Hello";
    const options = new PushNotificationOptions();
    options.body = "Native Push Notification";

    this._pushNotificationService.create(title, options).subscribe(
      notif => {
        if (notif.event.type === "show") {
          console.log("onshow");
          setTimeout(() => {
            notif.notification.close();
          }, 3000);
        }
        if (notif.event.type === "click") {
          console.log("click");
          notif.notification.close();
        }
        if (notif.event.type === "close") {
          console.log("close");
        }
      },
      err => {
        console.log(err);
      }
    );
  }
  sortArray(key, order) {
    this.array.sort((a, b) => {
      if (order === "asc") {
        if (a[key] > b[key]) {
          return 1;
        } else {
          return -1;
        }
      } else {
        if (a[key] < b[key]) {
          return 1;
        } else {
          return -1;
        }
      }
    });
  }
}
