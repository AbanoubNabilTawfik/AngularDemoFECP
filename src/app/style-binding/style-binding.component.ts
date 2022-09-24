import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.scss']
})
export class StyleBindingComponent implements OnInit {

  constructor() { }
  hasError:boolean=false;

  myStyles={
    color:"white",
    backgroundColor:"blue",
    fontStyle:"italic"
  }

  ngOnInit(): void {
  }

}
