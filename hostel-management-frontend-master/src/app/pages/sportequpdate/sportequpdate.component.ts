import {Component, Inject, OnInit} from '@angular/core';
import {SportuserService} from "../../service/sportuser.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import Swal from "sweetalert2";

@Component({
  selector: 'app-sportequpdate',
  templateUrl: './sportequpdate.component.html',
  styleUrls: ['./sportequpdate.component.css']
})

export class SportequpdateComponent implements OnInit {

  constructor(private sportService: SportuserService, private snack: MatSnackBar) { }

  public data = {
    equipmentId: Number,
    equipmentName: '',
    quantity: Number
  };

  ngOnInit(): void {
  }

  formUpdate() {
    console.log(this.data);
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
    this.sportService.updateEquipq( this.data.equipmentId, this.data).subscribe(
      (data:any) => {
        //Success
        console.log(data)
        //alert('success')
        //this.snack.open("Success!", "OK",{duration:3000});
        //Swal.fire('Success!','user is registered','success');
        Swal.fire('Success!','Data Updated !!!');
      },
      (error) => {
        console.log(error);
        //this.snack.open("Something went wrong!", "OK",{duration:3000});
        Swal.fire('Error','Something went wrong!','error');
      }
    )
  }
}




