import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {FormBuilder, FormArray , FormGroup} from '@angular/forms';
import { HttpService } from  '../../services/http.service';

import { from } from 'rxjs';


@Component({
  selector: 'app-base-edit',
  templateUrl: './base-edit.component.html',
  styleUrls: ['./base-edit.component.scss']
})

export class BaseEditComponent implements OnInit {

  endPoint:string ;
  fields :string[];
  selectedData:any[];
  ArrayForm = this.fb.array([])

  constructor(public location: Location, 
               public fb:FormBuilder,public httpSvc: HttpService) { 
                      this.location = location;
      }

  ngOnInit(): void {
      this.selectedData = history.state.selectedData ;
      this.initArrayForm() ;
  }

  createGroupForm(obj: any):FormGroup{
    let GruopForm = this.fb.group({});
    this.fields.forEach(
      field => {
         GruopForm.addControl(field, this.fb.control(obj[field])) 

      }
    )
    return GruopForm;
  }

  initArrayForm(){
    this.selectedData.forEach(
      obj => {this.ArrayForm.push(this.createGroupForm(obj))}
    )
  }



  goBeck():void{
    this.location.back();
  }

  Update(index:number){
      let data = this.ArrayForm.at(index).value;
      let id = data.id;
      
      this.httpSvc.putItem(this.endPoint, id, data).subscribe(
        ras => {  console.log('response ', ras)  ;
                  this.ArrayForm.removeAt(index);
                  if(this.ArrayForm.length == 0)
                          this.goBeck();
                } ) }

  cancel(){
    this.ArrayForm.clear();
    this.goBeck();
  }          
}
