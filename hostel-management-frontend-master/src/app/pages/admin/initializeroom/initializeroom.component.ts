import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-initializeroom',
  templateUrl: './initializeroom.component.html',
  styleUrls: ['./initializeroom.component.css']
})
export class InitializeroomComponent implements OnInit 
{

  data=
  {
    room_id:0
  }

  constructor(private student:UserService,private snak:MatSnackBar)
  { }

  ngOnInit(): void 
  {}

  doSubmitForm()
  {

    ////this.flag=true;
    this.student.initializeroom(this.data.room_id).subscribe((response: any) => 
    {
      Swal.fire('Success !!', 'success');

    },

    (error: any) => 
    {
      //this.flag=false;
      console.log(error);
      Swal.fire('Error !!', 'error');
    });
  }


}
