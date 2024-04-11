import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  DATA:any
  constructor(private login:LoginService,private snak:MatSnackBar)
  { }
  ngOnInit(): void 
  {
  this.DATA= this.login.getUser();
  }

  

}
