import { Component, OnInit } from '@angular/core';
import {SportuserService} from "../../service/sportuser.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import Swal from "sweetalert2";
import {MatTableDataSource} from "@angular/material/table";
import {sportdatasource} from "../../interface/equipment";
import {Observable} from "rxjs";



@Component({
  selector: 'app-sportudash',
  templateUrl: './sportudash.component.html',
  styleUrls: ['./sportudash.component.css']
})
export class SportudashComponent implements OnInit
{

  //sportdatasource$ : Observable<(sportdatasource[])>;

  sportdatasource: any;

  constructor(private sport:SportuserService,private snak:MatSnackBar)
  { }
  datasource: any;
  displayedColumns: string[] = ['position', 'name', 'weight'];
  ngOnInit(): void
  {
    this.getEquipmentList();
    console.log("getEq called");
  }
  // flag:boolean=false;
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
