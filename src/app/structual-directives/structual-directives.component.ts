import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structual-directives',
  templateUrl: './structual-directives.component.html',
  styleUrls: ['./structual-directives.component.scss']
})
export class StructualDirectivesComponent implements OnInit {

  constructor() { }

  displayName:boolean=false;
  isLoggedIn:boolean=true;
  fullName:string="Mohamed";

  carName:string="SPORTAGE";

  colors=["Orange","Red","Green","Blue"];

  persons=[
    {"id":1 , "name":"Ahmed Mohamed" , "salary":10000},
    {"id":2 , "name":"Sara Mostafa" ,  "salary":2000},
    {"id":3 , "name":"Abanoub Nabil" , "salary":1000},
    {"id":4 , "name":"Asmaa Ali" ,     "salary":5000}
  ]

  ngOnInit(): void {
  }

}
