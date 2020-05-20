import { Component, OnInit , ViewChild } from '@angular/core';
import {ColumnDefsService} from '../../services/column-defs.service';
import { HttpService } from  '../../services/http.service';
import { from } from 'rxjs';
import { AgGridAngular } from 'ag-grid-angular';
import { Router } from '@angular/router';

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

  constructor(public httpSvc: HttpService, public columnDefsSvc: ColumnDefsService, public router: Router) { }

  ngOnInit(): void {
      this.columnDefs =this.columnDefsSvc.getColumnDef(this.culumns)
      this.rowData = this.httpSvc.getItems(this.endPoint)

  }

  getSelectedRows():any[] {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map( node => node.data );
    // console.log(selectedData)
    return selectedData;
    
    // const selectedDataStringPresentation = selectedData.map( node => node.make + ' ' + node.model).join(', ');
    // alert(`Selected nodes: ${selectedDataStringPresentation}`);
}

navToedit(){
      let selectedIds = this.getSelectedIds();

      if (selectedIds.length == 0){
        alert('No selected rows to update!');
        return
      }
      this.router.navigate([this.endPoint,'edit', selectedIds.toString()],
            {state: {selectedData :this.getSelectedRows(), selectedIds}})
}

delete(){
  let idsToDelete = this.getSelectedIds();
  if (idsToDelete.length == 0){
    alert('No selected rows to delete!');
    return
  }

  if(confirm('Are you sure you want to delete users ?' + idsToDelete)){
  idsToDelete.forEach(
    id => {
      this.httpSvc.deleteItem(this.endPoint, id).subscribe()
    }
  )}
  
}

getSelectedIds():any[]{
    
    let ids:any[] = [];
    this.getSelectedRows().forEach(
        row => {ids.push(row.id)}
    )
    return ids;
  }
}
