import { Component, OnInit } from '@angular/core';
import {AdminGuard} from "../../service/admin.guard";
import {UserGuard} from "../../service/user.guard";
import {LoginService} from "../../service/login.service";

@Component({
  selector: 'app-sportsidenav',
  templateUrl: './sportsidenav.component.html',
  styleUrls: ['./sportsidenav.component.css']
})
export class SportsidenavComponent implements OnInit {

  role: any;

  constructor(public loginService: LoginService) { }
  ngOnInit(): void {
    if(this.loginService.getUserRole()=='ADMIN')
      this.role = "admin";
    else
      this.role = "user";
    console.log("ROLE: ", this.role);
  }

}
