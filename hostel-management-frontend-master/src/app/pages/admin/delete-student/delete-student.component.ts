import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.css']
})
export class DeleteStudentComponent implements OnInit 
{ data=
  {
    id:"",
    userName:"",
    firstname:"",
    lastname:"",
    phone:"",
    email:""
  }

  constructor(private student:UserService,private snak:MatSnackBar)
  { }

  ngOnInit(): void 
  {}

  doSubmitForm()
  {

    ////this.flag=true;
    this.student.deleteUser(this.data.id).subscribe((response: any) => 
    {
      Swal.fire(
        'Deleted',
        'You clicked the button!',
        'success'
      )

    },

    (error: any) => 
    {
      //this.flag=false;
      console.log(error);
      Swal.fire('Error !!', 'Error in loading data', 'error');
    });
  }

}

