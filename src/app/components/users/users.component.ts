import { Component, OnInit } from '@angular/core';
import {BaseComponent} from '../base/base.component';
import {ColumnDefsService} from '../../services/column-defs.service';
import { HttpService } from  '../../services/http.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent extends BaseComponent implements OnInit {

  constructor(public httpSvc: HttpService, public columnDefsSvc: ColumnDefsService) { 
    super(httpSvc, columnDefsSvc);
    this.endPoint = 'users';
    this.culumns = ['id', 'name', 'username', 'email']
  }

  ngOnInit(): void {
    super.ngOnInit()
  }

  // getSelectedRows(){
  //   super.getSelectedRows()
  // }
  
}
