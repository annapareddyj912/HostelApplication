import { Component, OnInit } from '@angular/core';
//import { MatSnackBar } from '@angular/material/snack-bar';
//import { UserService } from 'src/app/service/user.service';
//import Swal from 'sweetalert2';

@Component({
  selector: 'app-calculatefees',
  templateUrl: './calculatefees.component.html',
  styleUrls: ['./calculatefees.component.css']
})
export class CalculatefeesComponent implements OnInit
{ngOnInit(): void {
    throw new Error('Method not implemented.');
  } 
/*

  flag:boolean=false;
  data=
  {
    id:0,
   
  }
  fdata={
    id:0,
    hostel_fees:0,
    mess_fees:0,
  }
 
  constructor(private student:UserService,private snak:MatSnackBar)
  { }
  ngOnInit(): void 
  {
  }


  doSubmitForm()
  {

    this.flag=true;
    this.student.calculate(this.data.id).subscribe((response: any) => 
    {
      this.fdata=response;
      Swal.fire('Success !!','Success', 'success');
      console.log(response)

    },

    (error: any) => 
    {
      console.log(error);
      Swal.fire('Error !!', 'Does not exist in Database', 'error');
    });
  }


  doExportpdf()
  {
    this.flag=true
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
    ); */
  }
 


