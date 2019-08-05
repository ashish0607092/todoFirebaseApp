import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { TodoListComponent } from "./components/todo-list/todo-list.component";
import { CalendarComponent } from "./components/calendar/calendar.component";

const routes: Routes = [
  { path: "", redirectTo: "todo", pathMatch: "full" },
  { path: "todo", component: TodoListComponent },
  { path: "calendar", component: CalendarComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
