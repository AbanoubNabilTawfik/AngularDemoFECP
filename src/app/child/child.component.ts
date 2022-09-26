import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor() { }

  //@Input() parentData:any;
  @Input('parentData') message:any;
  @Input() cars:any;

  @Output() childEvent = new EventEmitter();

  @Output() childEventTwo = new EventEmitter();

  ngOnInit(): void {
  }

  sendData()
  {
    this.childEvent.emit("Hello Parent From Child")
  }

  sendDataTwo()
  {
    this.childEventTwo.emit([10,20,30,40,50,60]);
  }

  printMsg()
  {
    console.log("Im Child Component");
  }


}
