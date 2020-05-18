import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColumnDefsService {
// public culumns:string[];
  constructor() { }

  getColumnDef(culumns:string[]):any[]{
      let ColumnDef = []
          culumns.forEach(culumn =>{
            ColumnDef.push(
                {headerName: culumn, field: culumn, sortable: true, filter: true},
          )
    });

    ColumnDef[0].checkboxSelection = true;
    return ColumnDef
  }
  
  
}
