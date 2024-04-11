import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-roomshome',
  templateUrl: './roomshome.component.html',
  styleUrls: ['./roomshome.component.css']
})
export class RoomshomeComponent implements OnInit {
  DATA:any;
  constructor(private student:UserService,private snak:MatSnackBar) { }

  ngOnInit(): void {
  }

  countRooms()
  {
    
      this.student.countofrooms().subscribe(
        (data: any) => 
        {
          this.DATA = data;
          Swal.fire('Success !', 'Total number of rooms: '+data, 'success');
          console.log(data)
        },
        (error:any) => 
        {
          console.log(error);
          Swal.fire('Error !', 'Error in loading data !', 'error');
        }
      );
  }

  countFreerooms()
  {
    this.student.countoffreerooms().subscribe(
      (data: any) => 
      {
        this.DATA = data;
        Swal.fire('Success !', 'Total number of free rooms: '+data, 'success');
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
