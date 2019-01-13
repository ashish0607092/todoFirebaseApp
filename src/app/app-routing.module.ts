import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TodoListComponent } from "./todo-list/todo-list.component";

const routes: Routes = [
  { path: "", redirectTo: "todo", pathMatch: "full" },
  { path: "todo", component: TodoListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
