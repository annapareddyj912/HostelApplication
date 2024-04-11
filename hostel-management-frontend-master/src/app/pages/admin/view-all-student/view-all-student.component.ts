import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Data } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-all-student',
  templateUrl: './view-all-student.component.html',
  styleUrls: ['./view-all-student.component.css']
})
export class ViewAllStudentComponent implements OnInit
 {
  data=
  {
    id:"",
    userName:"",
    phone:"",
    email:""
  }

  userlist:Data[] | undefined;
 

  constructor(private student:UserService,private snak:MatSnackBar)
  { }

  doSubmitForm()
  {
    this.student.exportpdf().subscribe(
      (data: any) => 
      {
        const pdfBlobUrl = URL.createObjectURL(data);
        const link = document.createElement('a'); // Or maybe get it from the current document
        link.href = pdfBlobUrl;
        link.download = 'Download.pdf';
        link.click();
      },
      (error:any) => 
      {
        Swal.fire('Error !', 'Error in loading data !');
      }
    );
  }


  ngOnInit(): void
  {
    this.student.viewalluser().subscribe(
    (data: any) => {
      this.userlist = data;
      console.log(this.userlist);
    },
    (error:any) => 
    {
      console.log(error);
      Swal.fire('Error !', 'Error in loading data !', 'error');
    }
  );
}
  }


