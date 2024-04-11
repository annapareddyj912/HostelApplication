import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import {  Observable } from 'rxjs';
import { LaundryService } from 'src/app/service/laundry.service';

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
  selector: 'app-update-request',
  templateUrl: './update-request.component.html',
  styleUrls: ['./update-request.component.css']
})
export class UpdateRequestComponent implements OnInit {
  laundryRequest={
    weightOfCloths:0,
    clothsDry:false,
    numberOfIronedCloths:0,
    reqId:0,
  }

  laundryReq$!: Observable<laundryRequest>;
  id!: number;

  constructor(private route: ActivatedRoute,private laundry:LaundryService,
    private snack:MatSnackBar,private router:Router) {

    }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
       this.id= params["data"];
      console.log(this.id);
    });
    this.laundryReq$=this.laundry.getPendingRequestsByReqId(this.id);
  }

  formSubmit(){
    this.laundryRequest.reqId=this.id;
    if(this.laundryRequest.weightOfCloths==0)
    {
      this.snack.open("Weight of cloths should not be zero!!",'OK',{duration:3000});
      return;
    }
    this.laundry.updateLaundryRequestById(this.id,this.laundryRequest.weightOfCloths,
      this.laundryRequest.clothsDry,this.laundryRequest.numberOfIronedCloths);
      this.router.navigate(['/user-dashboard/pending-request'])
      .then(() => {
        window.location.reload();
      });
  }
}
