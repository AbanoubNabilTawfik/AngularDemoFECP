import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { IEmployee } from './IEmployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private htttp:HttpClient) { }
  url:string="/assets/Data/employees.json";
  employees=[]

  getEmployees():Observable<IEmployee[]>
  {
   // return this.employees;
   return this.htttp.get<IEmployee[]>(this.url).pipe(catchError((err)=>{
    return throwError(()=>err.message || "Internal Server error");
   }))
  }
}
