import { Todo } from "./todo.model";

export class AddTodo {
  public static readonly type = "[Todo] Add item";
  constructor(public payload: Todo) {}
}

export class UpdateTodo {
  public static readonly type = "[Todo] Update item";
  constructor(public payload: Todo) {}
}
