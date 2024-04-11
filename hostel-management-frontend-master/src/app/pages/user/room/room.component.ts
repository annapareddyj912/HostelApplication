import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/service/login.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  constructor(private login:LoginService,private student:UserService,private snak:MatSnackBar)
{}

DATA:any
 data=
  {
    id:0,
   
  }
 fdata={
  room:0,
  stud:0,
  start:"",
  end:"",
}
  
  ngOnInit(): void 
  {
    console.log(this.login.getUser())
    console.log("hey")
    console.log(this.login.getUser().id)
  this.data.id= this.login.getUser().id;

  this.student.ROOMDETAILS(this.data.id).subscribe((response: any) => 
    {
      this.fdata=response;
      console.log(response)

    },

    (error: any) => 
    {
      console.log(error);
    });

}
}
