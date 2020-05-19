import { Component, OnInit } from '@angular/core';
import {BaseComponent} from '../base/base.component';
import {ColumnDefsService} from '../../services/column-defs.service';
import { HttpService } from  '../../services/http.service';
import { from } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent extends BaseComponent implements OnInit {

  constructor(public httpSvc: HttpService, public columnDefsSvc: ColumnDefsService,
              public router: Router ) { 
    super(httpSvc, columnDefsSvc, router);
    this.endPoint = 'users';
    this.culumns = ['id', 'name', 'username', 'email'];
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  // getSelectedRows(){
  //   super.getSelectedRows()
  // }
  
}
