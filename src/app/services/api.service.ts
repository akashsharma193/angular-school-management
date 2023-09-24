import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
const apiUrl = 'http://localhost:8080/';
@Injectable({
    providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }


  getData(url:any){
    return this.http.get(apiUrl + url)
  }

  postData(endpoint:any ,post:any){
    return this.http.post(apiUrl + endpoint , post);
  }

}