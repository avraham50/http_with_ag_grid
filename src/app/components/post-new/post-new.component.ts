import { Component, OnInit } from '@angular/core';
import { BaseNewComponent} from '../base-new/base-new.component';
import { FormBuilder } from '@angular/forms';
import { HttpService } from  '../../services/http.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-post-new',
  templateUrl: './post-new.component.html',
  styleUrls: ['./post-new.component.scss']
})
export class PostNewComponent extends BaseNewComponent implements OnInit {

  constructor(public fb:FormBuilder, public httpSvc:HttpService, public location: Location) { 
    super(fb, httpSvc, location);
    this.endPoint = 'posts';
    this.fields = ['userId', 'title', 'body']
  
  }

  ngOnInit(): void {
    super.ngOnInit()
  }

}
