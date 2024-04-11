import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit 
{
  data=
  {
    userName:"",
    firstname:"",
    lastname:"",
    phone:"",
    email:""
  }
 
  constructor(private student:UserService,private snak:MatSnackBar) 
  { 

  }

  ngOnInit(): void 
  {
  }
  flag:boolean=false;
  doSubmitForm()
  {
    console.log("try to submit form");
    console.log("DATA",this.data);
 
    if(this.data.firstname==''||this.data.userName==''||this.data.lastname=='' ||this.data.phone=='')
    {
      this.snak.open("fields can not be empty!!","OK");
      return;
    }
   this.flag=true;
    this.student.addUser(this.data).subscribe(
      (response)=>
      {  
        this.flag=false;
          Swal.fire('Success', 'Student is added', 'success');
              this.data = 
                         {
                             userName:"",
                             firstname:"",
                             lastname:"",
                             phone:"",
                             email:""
                         };

      },
      (error) => 
      {
        this.flag=false;
        Swal.fire('Error!! ', 'Error while adding Student ', 'error');
        console.log(error);
      }
    

    );
  }

}
