import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updatefees',
  templateUrl: './updatefees.component.html',
  styleUrls: ['./updatefees.component.css']
})
/*export class UpdatefeesComponent implements OnInit
{

  data=
  {
    hostelfee:0,
    messfee:0,
  }


  constructor(private student:UserService,private snak:MatSnackBar) { }


  ngOnInit(): void {
  }


  doSubmitForm()
  {
    console.log(this.data);
    this.student.updatefees(this.data.hostelfee,this.data.messfee).subscribe(
    (response:any)=>
    {
      this.data = response;
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
*/
export class UpdatefeesComponent implements OnInit {

  data = {
    hostelfee: 0,
    messfee: 0,
  };

  constructor(private student: UserService, private snak: MatSnackBar) { }

  ngOnInit(): void {
  }

  doSubmitForm() {
    if (!this.data) {
      console.error('Data object is null or undefined');
      return;
    }
    console.log(this.data);
    this.student.updatefees(this.data.hostelfee, this.data.messfee).subscribe(
      (response: any) => {
        this.data = response;
        Swal.fire('Success', 'Fees is Set', 'success');
      },
      (error: any) => {
        Swal.fire('Error!! ', 'Error while Setting Fees ', 'error');
        console.error('Error while updating fees:', error);
      }
    );
  }
}
