import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userSerice: UserService, private snack: MatSnackBar) { }

  //variable name=backend var name
  public user = {
    userName: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  };

  ngOnInit(): void {

  };

  formSubmit() {
    console.log(this.user);
    if (this.user.userName == '' || this.user.userName == null ||
      this.user.password == '' || this.user.password == null ||
      this.user.firstName == '' || this.user.firstName == null ||
      this.user.lastName == '' || this.user.lastName == null ||
      this.user.email == '' || this.user.email == null ||
      this.user.phone == '' || this.user.phone == null
    ) {
      this.snack.open("fields can not be empty!!", "OK",{duration:3000});
      return;
    }

    // addUser:userService
    this.userSerice.addUser(this.user).subscribe(
      (data:any) => {
        //Success
        console.log(data)
        //alert('success')
        //this.snack.open("Success!", "OK",{duration:3000});
        //Swal.fire('Success!','user is registered','success');
        Swal.fire('Success!','user id is ' + data.id,'success');
      },
      (error) => {
        console.log(error);
        //this.snack.open("Something went wrong!", "OK",{duration:3000});
        Swal.fire('Error','Something went wrong!','error');
      }
    )
  }
}
