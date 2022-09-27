import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { IProduct } from './IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  url:string="https://dummyjson.com/products";

  postUrl:string="https://dummyjson.com/products/add"

  getProducts():Observable<any[]>
  {
   return this.http.get<any[]>(this.url).pipe(catchError((error)=>
   {
    return throwError(()=>error.message || "An error occured in the system please contact site adminstration")
   }));
  }

  postProduct(productTitle:string)
  {
   return this.http.post(this.postUrl,productTitle).pipe(catchError((error)=>{
    return throwError(()=>error.message || "Internal server error")
   }));
  }
}
