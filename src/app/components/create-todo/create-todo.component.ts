import { Todo } from "../../store/todo.model";
import { Validators } from "@angular/forms";
import { FormControl } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { Store } from "@ngxs/store";
import { v4 as uuid } from "uuid";
import { AddTodo } from "../../store/todo.actions";
import { MatDialogRef } from "@angular/material/dialog";
import * as moment from "moment";

@Component({
  selector: "app-create-todo",
  templateUrl: "./create-todo.component.html",
  styleUrls: ["./create-todo.component.scss"]
})
export class CreateTodoComponent implements OnInit {
  createTodoForm = new FormGroup({
    title: new FormControl("", Validators.required),
    description: new FormControl("")
  });
  constructor(
    private store: Store,
    public dialogRef: MatDialogRef<CreateTodoComponent>
  ) {}

  ngOnInit() {
  }
  addTodo() {
    const payload: Todo = {
      title: this.createTodoForm.controls["title"].value,
      description: this.createTodoForm.controls["description"].value,
      id: uuid(),
      completed: false,
      time: moment().add(30, "m").valueOf()
    };
    this.store.dispatch(new AddTodo(payload)).subscribe(val => {
      if (val) {
        this.dialogRef.close();
      }
    });
  }

}
