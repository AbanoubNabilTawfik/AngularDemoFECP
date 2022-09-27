import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  constructor(private employeeService:EmployeeService) { }
   
  employees:any=[];
  errorMsg:any;
  
  ngOnInit(): void {
   // this.employees=this.employeeService.getEmployees();
   this.employeeService.getEmployees().subscribe(
     employeesData=>{
      this.employees=employeesData;
     },
     errorData=>{
        this.errorMsg=errorData
     }  
   )
  }

}
