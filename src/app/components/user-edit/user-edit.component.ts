import { Component, OnInit } from '@angular/core';
import {BaseEditComponent} from '../base-edit/base-edit.component';
import {Location} from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { HttpService } from  '../../services/http.service';

import { from } from 'rxjs';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})

export class UserEditComponent extends BaseEditComponent implements OnInit {

  constructor(public location: Location, public fb:FormBuilder, httpSvc: HttpService) { 
            super(location, fb, httpSvc);
            this.endPoint = 'users';
            this.fields = [ 'id', 'name', 'username', 'email'];
}


  ngOnInit(): void {
      super.ngOnInit();
  }

}
