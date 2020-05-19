import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpService } from  '../../services/http.service';
import {Location} from '@angular/common';
import { ActivatedRoute, Params, Router } from '@angular/router';


// import { Validators } from '@angular/forms';
// import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-base-new',
  templateUrl: './base-new.component.html',
  styleUrls: ['./base-new.component.scss']
})
export class BaseNewComponent implements OnInit {
    endPoint:string;
    GruopForm = this.fb.group({})
    fields :string[];


  constructor(public fb:FormBuilder, public httpSvc:HttpService, public location: Location) { 
    this.location = location;
  }

  ngOnInit(): void {
    this.fields.forEach(
      field => {
        this.GruopForm.addControl(field, this.fb.control('')) 

      }
    )
  }

  addItem(){
    // console.log("add item", this.GruopForm.value );
    
    this.httpSvc.postItem(this.endPoint, this.GruopForm.value).subscribe(
      response => console.log(response)
    )
      this.clearFormGroupValue();
      this.goBeck();
  }

  cancel():void{
    this.clearFormGroupValue();
    this.goBeck()
  }

  clearFormGroupValue():void {
    this.fields.forEach(
      field => {
        this.GruopForm.patchValue({[field]:''}) 
      }
    )  
  }

  goBeck():void{
    this.location.back();
  }

}
