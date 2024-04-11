import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import Swal from "sweetalert2";
import {SportuserService} from "../../service/sportuser.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-sportadashboard',
  templateUrl: './sportadashboard.component.html',
  styleUrls: ['./sportadashboard.component.css']
})
export class SportadashboardComponent implements OnInit {

  constructor(private sport:SportuserService,private snak:MatSnackBar) { }
  datasource: any;
  displayedColumns: string[] = ['position', 'name', 'weight', 'update'];
  ngOnInit(): void {
    this.getEquipmentList();
    console.log("getEq called");
  }

  x=[];
  getEquipmentList()
  {

    ////this.flag=true;
    this.sport.viewSportlist().subscribe((response: any) =>
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
