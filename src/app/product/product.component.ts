import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { IProduct } from '../IProduct';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private productService:ProductService,private employeeService:EmployeeService) { }
  
  productsData:any;
  getErrorMsg:any;
  postErrorMsg:any;
  ngOnInit(): void {
      this.productService.getProducts().subscribe(
        productData=>{
          this.productsData=productData;
          console.log(productData)
        },
        error=>{
          this.getErrorMsg=error;
        }
      )
  }
  createProduct()
  {
    let productTitle="Dell Labtop";
    this.productService.postProduct(productTitle).subscribe(
      data=>
      {
        console.log(data);
      },
      error=>
      {
        this.postErrorMsg=error;
      }
    );
  }

}
