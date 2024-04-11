import { Component, OnInit } from '@angular/core';
import {SportuserService} from "../../service/sportuser.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatTableDataSource} from "@angular/material/table";
import Swal from "sweetalert2";

@Component({
  selector: 'app-reqgranttab',
  templateUrl: './reqgranttab.component.html',
  styleUrls: ['./reqgranttab.component.css']
})
export class ReqgranttabComponent implements OnInit {

  constructor(private sport:SportuserService,private snak:MatSnackBar) { }
  datasource: any;
  displayedColumns: string[] = ['rid', 'eid', 'ename', 'quantity', 'issue', 'return', 'reqstatus'];
  ngOnInit(): void {
    this.getStatusList();
    console.log("getRq called");
  }
  x=[];
  getStatusList()
  {

    ////this.flag=true;
    this.sport.viewStatuslist().subscribe((response: any) =>
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
}
