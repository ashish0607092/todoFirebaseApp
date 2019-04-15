import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TodoListComponent } from "./todo-list/todo-list.component";
import { DynamicFormComponent } from "./dynamic-form/dynamic-form.component";

const routes: Routes = [
  { path: "", redirectTo: "todo", pathMatch: "full" },
  { path: "todo", component: TodoListComponent },
  { path: "dyanmic", component: DynamicFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
