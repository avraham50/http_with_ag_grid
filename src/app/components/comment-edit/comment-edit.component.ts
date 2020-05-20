import { Component, OnInit } from '@angular/core';
import {BaseEditComponent} from '../base-edit/base-edit.component';
import {Location} from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { HttpService } from  '../../services/http.service';


@Component({
  selector: 'app-comment-edit',
  templateUrl: './comment-edit.component.html',
  styleUrls: ['./comment-edit.component.scss']
})
export class CommentEditComponent extends BaseEditComponent implements OnInit {

  constructor(public location: Location, public fb:FormBuilder, httpSvc: HttpService) { 
    super(location, fb, httpSvc);
    this.endPoint = 'comments';
    this.fields =  ['id', 'postId', 'body'];
}


    ngOnInit(): void {
    super.ngOnInit();
    }

}
