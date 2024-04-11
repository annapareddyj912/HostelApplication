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
  selector: 'app-rejected-admin-request',
  templateUrl: './rejected-admin-request.component.html',
  styleUrls: ['./rejected-admin-request.component.css']
})
export class RejectedAdminRequestComponent implements OnInit {
  rejectedReqs$: Observable<laundryRequest[]> | undefined;
  constructor(private laundry:LaundryService)
              {
              }

  ngOnInit(): void {
    this.rejectedReqs$ = this.laundry.getRejectedRequests();
  }
}
