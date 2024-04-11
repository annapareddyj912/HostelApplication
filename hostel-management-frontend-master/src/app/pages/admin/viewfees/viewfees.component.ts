import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-viewfees',
  templateUrl: './viewfees.component.html',
  styleUrls: ['./viewfees.component.css']
})

export class ViewfeesComponent implements OnInit 
{
  public DATA=
  {
    hostel_fees:0,
    mess_fees:0,
  }

  constructor(private student:UserService,private snak:MatSnackBar)
  { }

  ngOnInit(): void 
  {
    this.student.viewfees().subscribe(
      (data: any) => 
      {
        this.DATA = data;

        console.log(data)
      
      
      },
      (error:any) => 
      {
        console.log(error);
        Swal.fire('Error !', 'Error in loading data !', 'error');
      }
    );

    
  }

}
