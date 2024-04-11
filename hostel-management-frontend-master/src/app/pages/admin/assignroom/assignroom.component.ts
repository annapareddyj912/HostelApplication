import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-assignroom',
  templateUrl: './assignroom.component.html',
  styleUrls: ['./assignroom.component.css']
})
export class AssignroomComponent implements OnInit 
{

   data=
   {
     room:0,
     stud:0,
     startdate:"",
     enddate:""
   }
  constructor(private student:UserService,private snak:MatSnackBar)
  { }

  ngOnInit(): void 
  {
}
doSubmitForm()
{
  console.log(this.data)
  this.student.assignrooms(this.data.room,this.data.stud,this.data.startdate,this.data.enddate).subscribe(
    (response: any) => 
    {

      this.data = response;
      console.log(response)
      Swal.fire('Success !','Room alloted', 'success');
    }
,
    
    (error:any) => 
    {
      console.log(error);
      Swal.fire('Error !', 'error');
    }
  );

}



}
