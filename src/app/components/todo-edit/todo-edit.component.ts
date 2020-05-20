import { Component, OnInit } from '@angular/core';
import {BaseEditComponent} from '../base-edit/base-edit.component';
import {Location} from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { HttpService } from  '../../services/http.service';


@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.scss']
})
export class TodoEditComponent extends BaseEditComponent implements OnInit {

  constructor(public location: Location, public fb:FormBuilder, httpSvc: HttpService) { 
    super(location, fb, httpSvc);
    this.endPoint = 'todos';
    this.fields = ['id', 'userId', 'title'];
}


      ngOnInit(): void {
      super.ngOnInit();
      }

}
