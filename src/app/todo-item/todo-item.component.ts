import { Todo } from "../store/todo.model";
import { UpdateTodo, DeleteTodo } from "../store/todo.actions";
import { Store } from "@ngxs/store";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-todo-item",
  templateUrl: "./todo-item.component.html",
  styleUrls: ["./todo-item.component.scss"]
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  constructor(private store: Store) {}

  ngOnInit() {}
  updateTodo(isChecked, todo: Todo) {
    todo.completed = isChecked;
    this.store.dispatch(new UpdateTodo(todo));
  }
  deleteTodo(todo: Todo) {
    this.store.dispatch(new DeleteTodo(todo));
  }
}
