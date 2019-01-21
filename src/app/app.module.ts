import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
// import { environment } from "../environments/environment";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// import { AngularFireModule } from "@angular/fire";
// import { AngularFireAuthModule } from "@angular/fire/auth";
// import { AngularFirestoreModule } from "@angular/fire/firestore";
// import { AngularFireStorageModule } from "@angular/fire/storage";
import { TodoListComponent } from "./todo-list/todo-list.component";
import { TodoItemComponent } from "./todo-item/todo-item.component";
import { HeaderComponent } from "./header/header.component";
import { CreateTodoComponent } from "./create-todo/create-todo.component";
import { TodoState } from "./store/todo.state";
import { MatInputModule } from "@angular/material";
import { NgxsReduxDevtoolsPluginModule } from "@ngxs/devtools-plugin";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxsModule } from "@ngxs/store";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatPaginatorModule } from "@angular/material/paginator";
import { ScrollDispatchModule } from "@angular/cdk/scrolling";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { NgxsStoragePluginModule } from "@ngxs/storage-plugin";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { DatePipe } from "./date.pipe";
import { MatIconModule } from "@angular/material";
import { MatTabsModule } from "@angular/material/tabs";
import { NgArrayPipesModule } from "angular-pipes";

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoItemComponent,
    HeaderComponent,
    CreateTodoComponent,
    DatePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    MatPaginatorModule,
    ScrollDispatchModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTabsModule,
    MatIconModule,
    NgArrayPipesModule,
    // AngularFireModule.initializeApp(environment.firebase, "TodoFirebaseApp"),
    // AngularFireAuthModule,
    // AngularFirestoreModule,
    // AngularFireStorageModule,
    NgxsModule.forRoot([TodoState]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsStoragePluginModule.forRoot(),
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CreateTodoComponent]
})
export class AppModule {}
