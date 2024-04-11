import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';
import { LoginComponent } from '../../login/login.component';

@Component({
  selector: 'app-countofrooms',
  templateUrl: './countofrooms.component.html',
  styleUrls: ['./countofrooms.component.css']
})
export class CountofroomsComponent implements OnInit
 {
  DATA:any
  constructor(private student:UserService,private snak:MatSnackBar)
  { }

  ngOnInit(): void 
  {
    this.student.countofrooms().subscribe(
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
