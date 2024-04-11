import { Component, OnInit } from '@angular/core';
import {UserService} from "../../service/user.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {SportuserService} from "../../service/sportuser.service";
import {formatNumber} from "@angular/common";
import Swal from "sweetalert2";

@Component({
  selector: 'app-sportuform',
  templateUrl: './sportuform.component.html',
  styleUrls: ['./sportuform.component.css']
})
export class SportuformComponent implements OnInit {

  constructor(private sportService: SportuserService, private snack: MatSnackBar) { }

  public sportuser = {
    equipmentId: Number,
    equipmentName: '',
    quantity: Number,
    issueDate: Date,
    returnDate: Date,
    reqStatus: "Pending",
    status: 1
  };
  ngOnInit(): void {
  }

  formSubmit() {
    console.log(this.sportuser);
    //if (this.user.userName == '' || this.user.userName == null ||
    //  this.user.password == '' || this.user.password == null ||
    //  this.user.firstName == '' || this.user.firstName == null ||
    //  this.user.lastName == '' || this.user.lastName == null ||
    // this.user.email == '' || this.user.email == null ||
    //  this.user.phone == '' || this.user.phone == null
   // ) {
   //   this.snack.open("fields can not be empty!!", "OK",{duration:3000});
    //  return;
    //}

    // addUser:userService
    this.sportService.addRequest(this.sportuser).subscribe(
      (data:any) => {
        //Success
        console.log(data)
        //alert('success')
        //this.snack.open("Success!", "OK",{duration:3000});
        //Swal.fire('Success!','user is registered','success');
        Swal.fire('Success!','Request Sent !!!');
      },
      (error) => {
        console.log(error);
        //this.snack.open("Something went wrong!", "OK",{duration:3000});
        Swal.fire('Error','Something went wrong!','error');
      }
    )
  }


}
