import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.scss']
})
export class TdfComponent implements OnInit {

  constructor(private userService:UserService) { }

  topics=["Angular","React","Vue"]
  userModel:User= new User('','','',"Angular",true);

  ngOnInit(): void {
  }

  saveData()
  {
    //send userModel object to backend
    console.log(this.userModel)
    this.userService.postUser(this.userModel).subscribe(
      data=>{
        console.log("Success",data);
      },
      error=>{
        console.log("Error",error)
      }
    )
  }

}
