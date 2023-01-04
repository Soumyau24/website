import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url="http://localhost:3000/posts";

  constructor(private http: HttpClient) { }
  // postEmployeeDetails(data : any){
  // return this.http.post(this.url,data)

  getmethod(){
    return this.http.get(this.url) 
  }

postmethod(data:any){
  return this.http.post(this.url,data)
}



}

