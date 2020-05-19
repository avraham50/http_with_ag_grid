import { Component, OnInit } from '@angular/core';
import { BaseNewComponent} from '../base-new/base-new.component';
import { FormBuilder } from '@angular/forms';
import { HttpService } from  '../../services/http.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.scss']
})
export class UserNewComponent extends BaseNewComponent implements OnInit {

  constructor(public fb:FormBuilder, public httpSvc:HttpService, public location: Location) { 
    super(fb, httpSvc, location);
    this.endPoint = 'users';
    this.fields = [ 'name', 'username', 'email']
  }

  ngOnInit(): void {
    super.ngOnInit()
  }

}
