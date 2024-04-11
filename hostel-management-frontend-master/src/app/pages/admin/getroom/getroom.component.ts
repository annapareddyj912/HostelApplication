import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-getroom',
  templateUrl: './getroom.component.html',
  styleUrls: ['./getroom.component.css']
})
export class GetroomComponent implements OnInit 
{
  
  flag:boolean=false;
  data=
  {
    stud_id:0,
    room_id:0
  }
  constructor(private student:UserService,private snak:MatSnackBar)
  { }

  ngOnInit(): void {
  }
  doSubmitForm()
  {

    this.flag=true;
    this.student.getroombystudid(this.data.stud_id).subscribe((response: any) => 
    {
     this.data.room_id=response ;
     console.log(this.data.room_id);
     Swal.fire('Success', this.data.room_id+" ", 'success');
    },

    (error: any) => 
    {
      //this.flag=false;
      console.log(error);
      Swal.fire('Error !!', 'Error in loading data', 'error');
    });
  }


}
