import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LaundryService } from 'src/app/service/laundry.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-new-request',
  templateUrl: './new-request.component.html',
  styleUrls: ['./new-request.component.css']
})
export class NewRequestComponent implements OnInit {

  laundryRequest={
    weightOfCloths:0,
    clothsDry:false,
    numberOfIronedCloths:0,
    user:{id:''},
    requestTime:'',
  }
  constructor(private snack:MatSnackBar, private laundry:LaundryService,
    private login:LoginService) { }

  ngOnInit(): void {
  }

  formSubmit(){
    this.laundryRequest.user.id=this.login.getUser().id;
    console.log(this.laundryRequest)
     console.log("Submit button clicked");
    if(this.laundryRequest.weightOfCloths==0)
    {
      this.snack.open("Weight of cloths should not be zero!!",'OK',{duration:3000});
      return;
    }
    //request to server to generate token
    this.laundry.addLaundryRequest(this.laundryRequest).subscribe(
      (data:any)=>{
        console.log('success');
        console.log(data);
        this.snack.open('Success!','OK',{
          duration:3000,
        })
      },
      (error)=>{
        console.log('Error!');
        console.log(error);
        this.snack.open('Invalid Details! Try again','OK',{
          duration:3000,
        })
      }
    )
  }

}
