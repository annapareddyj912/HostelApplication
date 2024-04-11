import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-setfees',
  templateUrl: './setfees.component.html',
  styleUrls: ['./setfees.component.css']
})
export class SetfeesComponent implements OnInit 
{
  data=
  {
    hostelfee:"",
    messfee:"",
  }

  constructor(private student:UserService,private snak:MatSnackBar) { }

  ngOnInit(): void 
  {
  }

  doSubmitForm()
  {
    this.student.setfees(this.data).subscribe(
    (response:any)=>
    {

      console.log(this.data);
      // thisdata = 
      //                    {
      //                       hostelfee:"",
      //                       messfee:""
      //                    };
      Swal.fire('Success', 'Fees  is Set', 'success');

    },
    (error:any) => 
    {
     
      Swal.fire('Error!! ', 'Error while Setting  Fees ', 'error');
      console.log(error);
    }
    );
  
  }


}

