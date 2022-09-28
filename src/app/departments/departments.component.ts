import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {

  constructor(private router:Router,private activatedRoute:ActivatedRoute) { }

  departments=[
    {"id":1 ,"name":"Angular"},
    {"id":2 , "name":"JavaScript"},
    {"id":3 ,"name":"TypeScript"},
    {"id":4 ,"name":"Git"},
    {"id":5 , "name":"ReactJS"},
    {"id":6 ,"name":"ES6"}
  ]

  selectedDeptId:any;
  fullName:any;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
      this.selectedDeptId=params.get('id');
      this.fullName=params.get('name')
    })
  }

  goToDepartmentDetails(deptId:any)
  {
    //go to department details page and pass the id parameter to it
    this.router.navigate(["department",deptId]);
  }

}
