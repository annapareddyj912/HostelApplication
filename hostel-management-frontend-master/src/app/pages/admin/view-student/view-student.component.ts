import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})

export class ViewStudentComponent implements OnInit
 {
   

  data=
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
  {
    
  }
  flag:boolean=false;
  x=[];
  doSubmitForm()
  {

    this.flag=true;
    this.student.viewUser(this.data.userName).subscribe((response: any) => 
    {
     // this.flag=false;
      this.data= response;
      console.log(this.data);
      Swal.fire('Success !!','Data inputted correctly' ,'success');

    },

    (error) => 
    {
      this.flag=false;
      console.log(error);
      Swal.fire('Error !!', 'Error in loading data', 'error');
    });
  }


}
