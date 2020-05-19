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
// <mat-form-field appearance="outline">
// <mat-label>{{control}}:</mat-label>
// <input matInput placeholder="control">
// <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>
// <mat-hint>Hint</mat-hint>
// </mat-form-field>
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
// import {MatLabelModule} from '@angular/material/'
import { BaseComponent } from './components/base/base.component';
import { PostsComponent } from './components/posts/posts.component';
import { CommentsComponent } from './components/comments/comments.component';
import { TodosComponent } from './components/todos/todos.component';
import { UsersComponent } from './components/users/users.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { BaseEditComponent } from './components/base-edit/base-edit.component';
import { PostEditComponent } from './components/post-edit/post-edit.component';
import { TodoEditComponent } from './components/todo-edit/todo-edit.component';
import { CommentEditComponent } from './components/comment-edit/comment-edit.component';
import { UserNewComponent } from './components/user-new/user-new.component';
import { BaseNewComponent } from './components/base-new/base-new.component';
import { PostNewComponent } from './components/post-new/post-new.component';
import { TodoNewComponent } from './components/todo-new/todo-new.component';
import { CommentNewComponent } from './components/comment-new/comment-new.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { from } from 'rxjs';

// MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule
@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    PostsComponent,
    CommentsComponent,
    TodosComponent,
    UsersComponent,
    UserEditComponent,
    BaseEditComponent,
    PostEditComponent,
    TodoEditComponent,
    CommentEditComponent,
    UserNewComponent,
    BaseNewComponent,
    PostNewComponent,
    TodoNewComponent,
    CommentNewComponent,
    
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
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
