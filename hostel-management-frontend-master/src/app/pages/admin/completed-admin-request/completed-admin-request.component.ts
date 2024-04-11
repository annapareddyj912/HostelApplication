import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LaundryService } from 'src/app/service/laundry.service';

export class laundryRequest {
  constructor(
    public id: number,
    public user: {id:number},
    public requestTime:Date,
    public acceptanceTime:Date,
    public rejectionTime:Date,
    public completionTime:Date,
    public weightOfCloths:number,
    public clothsDry:boolean,
    public numberOfIronedCloths:number,
    public amount:number,
    public payment:number,
    public rejectionReason:string,
  ) {
  }
}
@Component({
  selector: 'app-completed-admin-request',
  templateUrl: './completed-admin-request.component.html',
  styleUrls: ['./completed-admin-request.component.css']
})
export class CompletedAdminRequestComponent implements OnInit {
  completedReqs$: Observable<laundryRequest[]> | undefined;
  constructor(private laundry:LaundryService)
              {
              }

  ngOnInit(): void {
    this.completedReqs$ = this.laundry.getCompletedRequests();
  }
  PaymentReceivedById(reqId:number){
    this.laundry.PaymentReceivedById(reqId);
  }
}
