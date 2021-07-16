import { Injectable } from '@angular/core';
import{HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import {catchError} from 'rxjs/operators'
//import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs/internal/observable/throwError';
import{Employee} from './employee'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  
  baseUrl: string='https://jsonplaceholder.typicode.com/users';
  _url: string='/details/get'
  _url1: string='/details/add'
  _url2: string='/details/update'
  _url3: string='/details/delete'
    //baseUrl: string='http://dummy.restapiexample.com/api/v1/employees'
   // baseUrl='https://api.npms.io/v2/search?q=scope:angular'
  constructor(private _http: HttpClient) { }

  getEmployeeList():Observable<any>{
      return this._http.get<any>(this._url).pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse){
    console.log('went to error')
    return throwError(error.message || "server error")
  }
  
  updateEmployeeById(emp: Employee){
    return this._http.put<any>(this._url2, emp, {responseType: 'Text' as 'json'}).pipe(catchError(this.errorHandler))
  }

  addEmployee(emp: Employee){
    return this._http.post<any>(this._url1, emp, {responseType: 'Text' as 'json'}).pipe(catchError(this.errorHandler))
  }

  deletEmployee(id){
    return this._http.delete<any>(this._url3+`/${id}`,{responseType: 'Text' as 'json'}).pipe(catchError(this.errorHandler))
    console.log('in serv-> del function');
    
  }


}
