import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule} from  '@angular/material/sidenav'; 
import { MatToolbarModule} from  '@angular/material/toolbar'; 
import { MatIconModule} from  '@angular/material/icon'; 
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { BaseComponent } from './components/base/base.component';
import { PostsComponent } from './components/posts/posts.component';
import { CommentsComponent } from './components/comments/comments.component';
import { TodosComponent } from './components/todos/todos.component';
import { UsersComponent } from './components/users/users.component'


// MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule
@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    PostsComponent,
    CommentsComponent,
    TodosComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
    BrowserAnimationsModule,
    MatToolbarModule, 
    MatIconModule, 
    MatSidenavModule, 
    MatListModule, 
    MatButtonModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
