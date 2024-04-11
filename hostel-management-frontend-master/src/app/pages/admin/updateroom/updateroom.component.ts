import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updateroom',
  templateUrl: './updateroom.component.html',
  styleUrls: ['./updateroom.component.css']
})
export class UpdateroomComponent implements OnInit {

 
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
 this.student.updaterooms(this.data.room,this.data.stud,this.data.startdate,this.data.enddate).subscribe(
   (response: any) => 
   {

     Swal.fire('Success!','Data updated' ,'success');
     console.log(response)

   },
   (error:any) => 
   {
     console.log(error);
     Swal.fire('Error !', 'error');
   }
 );

}

}
