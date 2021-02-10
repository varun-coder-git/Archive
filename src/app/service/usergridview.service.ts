import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsergridviewService {

  constructor(private http:HttpClient) { }

  getData():Observable<any>{

    const url="https://reqres.in/api/users";  
     return this.http.get<any>(url);
    }
}
