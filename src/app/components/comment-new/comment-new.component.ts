import { Component, OnInit } from '@angular/core';
import { BaseNewComponent} from '../base-new/base-new.component';
import { FormBuilder } from '@angular/forms';
import { HttpService } from  '../../services/http.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-comment-new',
  templateUrl: './comment-new.component.html',
  styleUrls: ['./comment-new.component.scss']
})
export class  CommentNewComponent extends BaseNewComponent implements OnInit {

  constructor(public fb:FormBuilder, public httpSvc:HttpService, public location: Location) { 
    super(fb, httpSvc, location);
    this.endPoint = 'comments';
    this.fields =  [ 'postId', 'body']
  }

  ngOnInit(): void {
    super.ngOnInit()
  }
}
