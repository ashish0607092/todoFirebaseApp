import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TodoListComponent } from "./todo-list/todo-list.component";
import { DynamicFormComponent } from "./dynamic-form/dynamic-form.component";
import { SelectWithInputComponent } from "./select-with-input/select-with-input.component";
import { CalendarComponent } from "./calendar/calendar.component";

const routes: Routes = [
  { path: "", redirectTo: "todo", pathMatch: "full" },
  { path: "todo", component: TodoListComponent },
  { path: "dyanmic", component: DynamicFormComponent },
  { path: "input", component: SelectWithInputComponent },
  { path: "calendar", component: CalendarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
