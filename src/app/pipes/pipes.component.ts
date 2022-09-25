import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  constructor() { }

  fullName:string="Abanoub nabil"

  todayDate:Date= new Date();

  numbers=[10,20,30,40,50];

  ngOnInit(): void {
  }

}
