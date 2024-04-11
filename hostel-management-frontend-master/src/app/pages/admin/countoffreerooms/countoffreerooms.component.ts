import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-countoffreerooms',
  templateUrl: './countoffreerooms.component.html',
  styleUrls: ['./countoffreerooms.component.css']
})
export class CountoffreeroomsComponent implements OnInit 
{
  DATA:any
  constructor(private student:UserService,private snak:MatSnackBar)
  { }

  ngOnInit(): void 
  {
    this.student.countoffreerooms().subscribe(
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
