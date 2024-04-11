import { Component } from '@angular/core';
import {LoginService} from "./service/login.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hostelFrontend';
  role: string = "";
  constructor(public loginService: LoginService) {
    console.log("LOGINSERVICE: ", loginService.getUserRole());
    if(loginService.getUserRole()==='ADMIN')
     this.role='admin';
   else if(loginService.getUserRole()==='NORMAL')
     this.role='user';
  }
}
