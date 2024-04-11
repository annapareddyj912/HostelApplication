import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-isoccupied',
  templateUrl: './isoccupied.component.html',
  styleUrls: ['./isoccupied.component.css']
})
export class IsoccupiedComponent implements OnInit {

  data=
  {
    id:0,
    x:0
  }


  constructor(private student:UserService,private snak:MatSnackBar)
  { }

  ngOnInit(): void 
  {}

  res=" Available"
  doSubmitForm()
  {

    this.student.isoccupied(this.data.id).subscribe((response: any) => 
    {
      this.data.x=response;
      if(this.data.x)
      this.res="Available"
    
      Swal.fire('Success !!',this.res, 'success');

    },

    (error: any) => 
    {
      //this.flag=false;
      console.log(error);
      Swal.fire('Error !!', 'Room not yet Initailized,please initialize room ', 'error');
    });
  }


}
