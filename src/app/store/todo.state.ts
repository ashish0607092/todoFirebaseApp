import { State, Action, Selector, StateContext } from "@ngxs/store";
import { AddTodo, UpdateTodo } from "./todo.actions";
import { Todo } from "./todo.model";

export interface TodoStateModel {
  todos: Todo[];
}

@State<TodoStateModel>({
  name: "todo",
  defaults: {
    todos: []
  }
})
export class TodoState {
  @Selector()
  public static getAllTodos(data: TodoStateModel) {
    return data.todos;
  }
  @Selector()
  public static getActiveTodos(data: TodoStateModel) {
    return data.todos.filter(todo => todo.completed === false);
  }
  @Selector()
  public static getCompletedTodos(data: TodoStateModel) {
    return data.todos.filter(todo => todo.completed === true);
  }

  @Action(AddTodo)
  public add(
    { getState, patchState }: StateContext<TodoStateModel>,
    { payload }: AddTodo
  ) {
    const state = getState();
    patchState({
      todos: [...state.todos, payload]
    });
  }

  @Action(UpdateTodo)
  public updateTodo(ctx: StateContext<TodoStateModel>) {
    const state = ctx.getState();
    ctx.patchState({
      todos: [...state.todos]
    });
  }
}

// @Action(UpdateTodo)
// public updateTodo(
//   ctx: StateContext<TodoStateModel>,
//   { payload }: UpdateTodo
// ) {
//   const state = ctx.getState();
//   ctx.patchState({
//     todos: state.todos.filter(({ id }) => id !== payload.id)
//   });
// }
// }
