import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersComponent} from './components/users/users.component';
import {TodosComponent} from './components/todos/todos.component';
import {PostsComponent } from './components/posts/posts.component';
import {CommentsComponent} from './components/comments/comments.component';

import { from } from 'rxjs';


const routes: Routes = [
          {path:'', redirectTo: 'users', pathMatch: 'full'},
          {path:'users',component:UsersComponent},
          {path:'todos',component:TodosComponent},
          {path:'comments' ,component:CommentsComponent},
          {path:'posts',component:PostsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
