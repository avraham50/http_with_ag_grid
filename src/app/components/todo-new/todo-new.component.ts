import { Component, OnInit } from '@angular/core';
import { BaseNewComponent} from '../base-new/base-new.component';
import { FormBuilder } from '@angular/forms';
import { HttpService } from  '../../services/http.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-todo-new',
  templateUrl: './todo-new.component.html',
  styleUrls: ['./todo-new.component.scss']
})
export class TodoNewComponent extends BaseNewComponent implements OnInit {

  constructor(public fb:FormBuilder, public httpSvc:HttpService, public location: Location) { 
    super(fb, httpSvc, location);
    this.endPoint = 'todos';
    this.fields = ['userId', 'title']
  }

  ngOnInit(): void {
    super.ngOnInit()
  }

}
