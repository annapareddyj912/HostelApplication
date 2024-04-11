import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { EmailService } from 'src/app/service/email.service';
import { LaundryService } from 'src/app/service/laundry.service';
import { LoginService } from 'src/app/service/login.service';
import { UserService } from 'src/app/service/user.service';

export class laundryRequest {
  constructor(
    public id: number,
    public user: { id: number },
    public requestTime: Date,
    public acceptanceTime: Date,
    public rejectionTime: Date,
    public completionTime: Date,
    public weightOfCloths: number,
    public clothsDry: boolean,
    public numberOfIronedCloths: number,
    public amount: number,
    public payment: number,
    public rejectionReason: string,
  ) {
  }
}
@Component({
  selector: 'app-accepted-admin-request',
  templateUrl: './accepted-admin-request.component.html',
  styleUrls: ['./accepted-admin-request.component.css']
})
export class AcceptedAdminRequestComponent implements OnInit {
  acceptedReqs$: Observable<laundryRequest[]> | undefined;
  prices: { type: string; amount: number; }[] = [];
  pricesData = {
    DryCloths: 0,
    IroningCloth: 0,
    PerKgCost: 0,
  }
  emailData = {
    to: "",
    subject: "",
    message: ""
  }
  amount: number = 0;
  constructor(private laundry: LaundryService,
    private login: LoginService, private snack: MatSnackBar, private email: EmailService,
    private user: UserService) {
  }

  ngOnInit(): void {
    this.acceptedReqs$ = this.laundry.getAcceptedRequests();
    this.laundry.getLaundryPrices().subscribe(
      (data: any) => {
        this.prices = data;
        console.log("Success!!!")
        console.log(data)
        for (var element of this.prices) {
          console.log(element.type);
          console.log(element.amount);
          if (element.type == "DryCloths")
            this.pricesData.DryCloths = element.amount;
          else if (element.type == "IroningCloth")
            this.pricesData.IroningCloth = element.amount;
          else if (element.type == "PerKgCost")
            this.pricesData.PerKgCost = element.amount;
        }
      },
      (error) => {
        console.log("Error!!!")
        console.log(error)
      }
    )
    console.log(this.prices);

  }
  completeLaundryReqbyId(laundryReq: laundryRequest) {
    this.amount = 0;
    this.amount = this.pricesData.PerKgCost * laundryReq.weightOfCloths;
    if (laundryReq.clothsDry)
      this.amount += this.pricesData.DryCloths;
    this.amount += this.pricesData.IroningCloth * laundryReq.numberOfIronedCloths;
    
    this.user.getEmailIdByStudId(laundryReq.user.id).subscribe(
      (data: any) => {
        this.emailData.to = data;
        console.log(this.emailData.to);
        this.emailData.subject = "Laundry Request(id=" + laundryReq.id + ") Completed!";
        this.emailData.message = "Kindly collect the cloths and pay the amount of " + this.amount + " to admin";
        console.log(this.emailData)
        this.email.sendEmail(this.emailData).subscribe(
          response => {
            console.log(response);
            this.snack.open("Email sent successfully.", "OK");
          },
          error => {
            console.log(error);
            this.snack.open("Email not sent.", "OK");
          }
        )
      },
      (error) => {
        console.log("Error occurred while fetching email-id!!!");
        console.log(error);
        this.snack.open('Error occurred while fetching email-id', 'OK')
      }
    )

    this.laundry.completeLaundryReqbyId(laundryReq.id, this.amount);

  }
}
