import { Component, OnInit } from '@angular/core';
import {BaseEditComponent} from '../base-edit/base-edit.component';
import {Location} from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { HttpService } from  '../../services/http.service';


@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss']
})
export class PostEditComponent  extends BaseEditComponent implements OnInit {

  constructor(public location: Location, public fb:FormBuilder, httpSvc: HttpService) { 
    super(location, fb, httpSvc);
    this.endPoint = 'posts';
    this.fields = ['id', 'userId', 'title', 'body'];
}


ngOnInit(): void {
super.ngOnInit();
}


}
