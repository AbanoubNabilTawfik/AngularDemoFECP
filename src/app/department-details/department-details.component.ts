import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.scss']
})
export class DepartmentDetailsComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private router:Router) { }
  deptId:any;
  ngOnInit(): void {
    //this.deptId=this.activatedRoute.snapshot.paramMap.get("id");
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
      //call backend
      this.deptId=params.get("id");
    })

  }

  goToPrevious()
  {
    let prevId=parseInt(this.deptId)-1;
    this.router.navigate(["department",prevId])
  }

  goToNext()
  {
    let nextId= parseInt(this.deptId)+1;
    this.router.navigate(["department",nextId]);
  }

  goToDepartments()
  {
    //go to departments page and pass deptId
    this.router.navigate(['/departments',{id:this.deptId,name:"Abanoub"}])
  }
  goToPricing()
  {
   //go to pricing page
   this.router.navigate(['pricing'],{relativeTo:this.activatedRoute})
  }
  goToContact()
  {
   //go to contact page
   this.router.navigate(['contact'],{relativeTo:this.activatedRoute})
  }

  goToOverview()
  {
   //go to overview
   this.router.navigate(['overview'],{relativeTo:this.activatedRoute})
  }

}
