import { Component, OnInit , ViewChild } from '@angular/core';
import {ColumnDefsService} from '../../services/column-defs.service';
import { HttpService } from  '../../services/http.service';
import { from } from 'rxjs';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {
  @ViewChild('agGrid') agGrid: AgGridAngular;

  rowData: any;
  columnDefs:any[];
  endPoint: string;
  culumns: string[];

  constructor(public httpSvc: HttpService, public columnDefsSvc: ColumnDefsService) { }

  ngOnInit(): void {
      this.columnDefs =this.columnDefsSvc.getColumnDef(this.culumns)
      this.rowData = this.httpSvc.getItems(this.endPoint)

  }

  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map( node => node.data );
    console.log(selectedData)
    // const selectedDataStringPresentation = selectedData.map( node => node.make + ' ' + node.model).join(', ');
    // alert(`Selected nodes: ${selectedDataStringPresentation}`);
}

}
