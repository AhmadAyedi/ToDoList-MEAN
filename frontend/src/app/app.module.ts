import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Import FormsModule
import { RouterModule, Routes } from '@angular/router';  // Import RouterModule

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

const routes: Routes = [
  { path: '', component: TodoListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    // No need to declare TodoListComponent here since it's standalone
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TodoListComponent,  // Import TodoListComponent here
    RouterModule.forRoot(routes)  // Configure routes
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
