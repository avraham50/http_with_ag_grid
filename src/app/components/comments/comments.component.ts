import { Component, OnInit } from '@angular/core';
import {BaseComponent} from '../base/base.component';
import {ColumnDefsService} from '../../services/column-defs.service';
import { HttpService } from  '../../services/http.service';
import { from } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent extends BaseComponent implements OnInit {

  constructor(public httpSvc: HttpService, public columnDefsSvc: ColumnDefsService,
      public router: Router ) { 
      super(httpSvc, columnDefsSvc, router);
      this.endPoint = 'comments';
      this.culumns = ['id', 'postId', 'body']
}


  ngOnInit(): void {
      super.ngOnInit();
  }

}
