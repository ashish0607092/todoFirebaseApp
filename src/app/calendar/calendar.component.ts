import { Component, OnInit, ViewChild, OnDestroy } from "@angular/core";
import { FullCalendarComponent } from "@fullcalendar/angular";
import { EventInput } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGrigPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; // for dateClick
import { Store, Select } from "@ngxs/store";
import { Navigate } from "@ngxs/router-plugin";
import { TodoState } from "../store/todo.state";
import { SubSink } from "subsink";
import { Todo } from "../store/todo.model";
import { UpdateTodo, DeleteTodo, UpdateSingleTodo } from "../store/todo.actions";
@Component({
  selector: "app-calendar",
  templateUrl: "./calendar.component.html",
  styleUrls: ["./calendar.component.scss"]
})
export class CalendarComponent implements OnInit, OnDestroy {
  @ViewChild("calendar", { static: true })
  calendarComponent: FullCalendarComponent; // the #calendar in the template
  calendarPlugins = [dayGridPlugin, timeGrigPlugin, interactionPlugin];
  calendarWeekends = true;
  calendarEvents: EventInput[] = [];
  @Select(TodoState.getActiveTodos) activeTodos$;
  private calendarSubs = new SubSink();
  constructor(private store: Store) { }

  ngOnInit() {
    this.calendarSubs.add(
      this.activeTodos$.subscribe((todoList: Array<Todo>) => {
        this.calendarEvents = todoList.map(todo => {
          return {
            title: todo.title,
            start: new Date(todo.time),
            end: new Date(todo.time)
          };
        });
      })
    );
  }
  switchToList() {
    this.store.dispatch(new Navigate(["todo"]));
  }
  onEventDragStop(info) {
    console.log("info.event.start", info.event);
  }
  onEventDrop(info) {
    const todo = {
      title: info.event.title,
      time: info.event.start
    };
    this.store.dispatch(new UpdateSingleTodo(todo));

  }

  dateClick(event) {
    console.log("dateClick", event);
  }
  ngOnDestroy() {
    this.calendarSubs.unsubscribe();
  }
}
