import { Component, OnInit } from '@angular/core';
import {BaseComponent} from '../base/base.component';
import {ColumnDefsService} from '../../services/column-defs.service';
import { HttpService } from  '../../services/http.service';
import { from } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent extends BaseComponent implements OnInit {

  constructor(public httpSvc: HttpService, public columnDefsSvc: ColumnDefsService,
      public router: Router ) { 
      super(httpSvc, columnDefsSvc, router);
      this.endPoint = 'posts';
      this.culumns = ['id', 'userId', 'title', 'body']
  }


  ngOnInit(): void {
    super.ngOnInit();
  }

}
