import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  @ViewChild(ChildComponent) child : ChildComponent= new ChildComponent();
  
  constructor() { }


  message:string="Hello Child From Parent component";

  cars=["Tipo","KIA","Logan","Sportage"];

  dataFromChild:any;
  dataFromChildTwo:any;

  ngOnInit(): void {
  }

  ngAfterViewInit()
  {
    this.child.printMsg();
  }

}
