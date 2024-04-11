import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LaundryService } from 'src/app/service/laundry.service';
import { LoginService } from 'src/app/service/login.service';

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
  selector: 'app-accepted-request',
  templateUrl: './accepted-request.component.html',
  styleUrls: ['./accepted-request.component.css']
})
export class AcceptedRequestComponent implements OnInit {
  acceptedReqs$: Observable<laundryRequest[]> | undefined;
  constructor(private laundry:LaundryService,
              private login:LoginService)
              {
              }

  ngOnInit(): void {
    this.acceptedReqs$ = this.laundry.getAcceptedRequestsById(this.login.getUser().id);
  }
}
