import { Todo } from "./todo.model";

export class AddTodo {
  public static readonly type = "[Todo] ADD_TODO";
  constructor(public payload: Todo) {}
}

export class UpdateTodo {
  public static readonly type = "[Todo] UPDATE_TODO";
  constructor(public payload: Todo) {}
}
export class DeleteTodo {
  public static readonly type = "[Todo] DELETE_TODO";
  constructor(public payload: Todo) {}
}
