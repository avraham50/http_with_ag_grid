import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})


export class HttpService {

  constructor(public http:HttpClient) { }

  public api : string = "https://jsonplaceholder.typicode.com/";

    getItems(endpoint:string):Observable<any[]>{
        return this.http.get<any[]>(this.api + endpoint)
    }

    postItem(endpoint:string, data:any):Observable<any>{
      return this.http.post<any>(this.api + endpoint, data, httpOptions)
      
    }

    deleteItem(endpoint, id):Observable<any>{
      return this.http.delete<any>(this.api + endpoint + "/" + id)
    }
    
}
