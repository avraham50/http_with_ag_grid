import { Component, OnInit } from '@angular/core';
import {BaseComponent} from '../base/base.component';
import {ColumnDefsService} from '../../services/column-defs.service';
import { HttpService } from  '../../services/http.service';
import { from } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent extends BaseComponent implements OnInit {

  constructor(public httpSvc: HttpService, public columnDefsSvc: ColumnDefsService,
      public router: Router ) { 
      super(httpSvc, columnDefsSvc, router);
      this.endPoint = 'todos';
      this.culumns = ['id', 'userId', 'title']
  }


  ngOnInit(): void {
      super.ngOnInit();
  }

}
