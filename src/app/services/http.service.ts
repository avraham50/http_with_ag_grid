import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public http:HttpClient) { }

  public api : string = "https://jsonplaceholder.typicode.com/";

    getItems(endpoint:string):Observable<any[]>{
        return this.http.get<any[]>(this.api + endpoint)
    }
    
}
