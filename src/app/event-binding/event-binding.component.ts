import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showMsg()
  {
    console.log("Hello from typescript")
  }

  printText(input:any)
  {
   console.log(input.value)
  }

}
