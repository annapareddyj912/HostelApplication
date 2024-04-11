import { Component, OnInit } from '@angular/core';
import {SportuserService} from "../../service/sportuser.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import Swal from "sweetalert2";
import {MatTableDataSource} from "@angular/material/table";
import baseUrl from "../../service/helper";

@Component({
  selector: 'app-sportgrant',
  templateUrl: './sportgrant.component.html',
  styleUrls: ['./sportgrant.component.css']
})
export class SportgrantComponent implements OnInit {

  constructor(private sport:SportuserService,private snak:MatSnackBar) { }
  datasource: any;
  displayedColumns: string[] = ['rid', 'eid', 'ename', 'quantity', 'issue', 'return', 'grant', 'reject'];
  ngOnInit(): void {
    this.getRequestList();
    console.log("getRq called");
  }

  x=[];
  getRequestList()
  {

    ////this.flag=true;
    this.sport.viewRequestlist().subscribe((response: any) =>
      {
        //this.flag=false;
        // this.sportdatasource = response;
        this.datasource = new  MatTableDataSource<any>(response);
        //return response;
        console.log(this.datasource);
        //Swal.fire('Success !!',this.data.equipmentId + this.data.equipmentName + this.data.quantity , 'success');

      },

      (error) =>
      {
        //this.flag=false;
        console.log(error);
        Swal.fire('Error !!', 'Error in loading data', 'error');
      });
  }

  grant(element: any){
    console.log("element", element);
    this.sport.grantUpdate(element.equipmentId, element).subscribe(
      (data:any) => {
        //Success
        console.log(data)
        //alert('success')
        //this.snack.open("Success!", "OK",{duration:3000});
        //Swal.fire('Success!','user is registered','success');
        Swal.fire('Success!','Request Granted !!!');
        this.sport.grantReq(element.reqId).subscribe(
          (data:any) => {
            //Success
            console.log(data)
            //alert('success')
            //this.snack.open("Success!", "OK",{duration:3000});
            //Swal.fire('Success!','user is registered','success');
            Swal.fire('Success!','Request Granted !!!');
            this.sport.viewRequestlist().subscribe((response: any) =>
              {
                //this.flag=false;
                // this.sportdatasource = response;
                this.datasource = new  MatTableDataSource<any>(response);
                //return response;
                console.log(this.datasource);
                //Swal.fire('Success !!',this.data.equipmentId + this.data.equipmentName + this.data.quantity , 'success');

              },

              (error) =>
              {
                //this.flag=false;
                console.log(error);
                Swal.fire('Error !!', 'Error in loading data', 'error');
              });
          },
          (error) => {
            console.log(error);
            //this.snack.open("Something went wrong!", "OK",{duration:3000});
            Swal.fire('Error','Data not updated!','error');
          }
        )
      },
      (error : any) => {
        console.log(error);
        //this.snack.open("Something went wrong!", "OK",{duration:3000});
        Swal.fire('Error','Data not updated!','error');
      }
    )

  /*  this.sport.grantReq(element.rid).subscribe(
      (data:any) => {
        //Success
        console.log(data)
        //alert('success')
        //this.snack.open("Success!", "OK",{duration:3000});
        //Swal.fire('Success!','user is registered','success');
        Swal.fire('Success!','Request Granted !!!');
      },
      (error) => {
        console.log(error);
        //this.snack.open("Something went wrong!", "OK",{duration:3000});
        Swal.fire('Error','Something went wrong!','error');
      }
    )*/
  }


  reject(element: any){
    this.sport.grantReq2(element.reqId).subscribe(
      (data:any) => {
        //Success
        console.log(data)
        //alert('success')
        //this.snack.open("Success!", "OK",{duration:3000});
        //Swal.fire('Success!','user is registered','success');
        Swal.fire('Success!','Request Rejected !!!');
        this.sport.viewRequestlist().subscribe((response: any) =>
          {
            //this.flag=false;
            // this.sportdatasource = response;
            this.datasource = new  MatTableDataSource<any>(response);
            //return response;
            console.log(this.datasource);
            //Swal.fire('Success !!',this.data.equipmentId + this.data.equipmentName + this.data.quantity , 'success');

          },

          (error) =>
          {
            //this.flag=false;
            console.log(error);
            Swal.fire('Error !!', 'Error in loading data', 'error');
          });
      },
      (error) => {
        console.log(error);
        //this.snack.open("Something went wrong!", "OK",{duration:3000});
        Swal.fire('Error','Data not updated!','error');
      }
    )

  }
}
