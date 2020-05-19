import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersComponent} from './components/users/users.component';
import {TodosComponent} from './components/todos/todos.component';
import {PostsComponent } from './components/posts/posts.component';
import {CommentsComponent} from './components/comments/comments.component';
import {UserEditComponent} from './components/user-edit/user-edit.component';
import {UserNewComponent} from './components/user-new/user-new.component';
import {TodoEditComponent} from './components/todo-edit/todo-edit.component';
import {TodoNewComponent} from './components/todo-new/todo-new.component';
import {PostEditComponent} from './components/post-edit/post-edit.component';
import {PostNewComponent} from './components/post-new/post-new.component';
import { CommentEditComponent} from './components/comment-edit/comment-edit.component';
import {CommentNewComponent} from './components/comment-new/comment-new.component';


import { from } from 'rxjs';

const userChildren: Routes = [
  {path:'edit/:ids', component: UserEditComponent},
  {path:'new', component: UserNewComponent}
];

const todoChildren: Routes = [
  {path:'edit/:ids', component: TodoEditComponent},
  {path:'new', component: TodoNewComponent}
];

const postChildren: Routes = [
  {path:'edit/:ids', component: PostEditComponent},
  {path:'new', component: PostNewComponent}
];

const commentsChildren: Routes = [
  {path:'edit/:ids', component: CommentEditComponent},
  {path:'new', component: CommentNewComponent}
];

const routes: Routes = [
          {path:'', redirectTo: 'users', pathMatch: 'full'},
          {path:'users',component:UsersComponent, children: userChildren},
          {path:'todos',component:TodosComponent, children:todoChildren},
          {path:'comments' ,component:CommentsComponent, children: commentsChildren},
          {path:'posts',component:PostsComponent, children: postChildren},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
