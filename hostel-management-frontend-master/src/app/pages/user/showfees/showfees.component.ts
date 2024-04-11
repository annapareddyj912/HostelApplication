import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/service/login.service';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-showfees',
  templateUrl: './showfees.component.html',
  styleUrls: ['./showfees.component.css']
})
export class ShowfeesComponent implements OnInit 
{
 DATA:any
 data=
  {
    id:0,
   
  }
 fdata={
  id:0,
  hostel_fees:0,
  mess_fees:0,
}
constructor(private login:LoginService,private student:UserService,private snak:MatSnackBar)
{}
  
  ngOnInit(): void 
  {
    console.log(this.login.getUser())
    console.log("hey")
    console.log(this.login.getUser().id)
  this.data.id= this.login.getUser().id;

  this.student.calculate(this.data.id).subscribe((response: any) => 
    {
      this.fdata=response;
      console.log(response)

    },

    (error: any) => 
    {
      console.log(error);
    });

}


doExportpdf()
{
  this.student.Exportpdf(this.data.id).subscribe(
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

}
