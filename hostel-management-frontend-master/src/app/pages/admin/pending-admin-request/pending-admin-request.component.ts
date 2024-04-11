import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LaundryService } from 'src/app/service/laundry.service';
import { LoginService } from 'src/app/service/login.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


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
  selector: 'app-pending-admin-request',
  templateUrl: './pending-admin-request.component.html',
  styleUrls: ['./pending-admin-request.component.css']
})
export class PendingAdminRequestComponent implements OnInit {
  rejectReq={
    reason:'',
  }
  pendingReqs$: Observable<laundryRequest[]> | undefined;

  constructor(private laundry: LaundryService,private router:Router,
    private login: LoginService, private snack: MatSnackBar) {
  }

  ngOnInit(): void {
    this.pendingReqs$ = this.laundry.getPendingRequests();
  }
  updateLaundryReq(laundryReq:laundryRequest){
    this.router.navigate(['/update-admin'],{queryParams:{"data":laundryReq.id}});
  }

  acceptLaundryReqbyId(ReqId: number){
      this.laundry.acceptLaundryReqbyId(ReqId);
  }

  rejectLaundryReqbyId(id:number){
    this.rejectReq.reason="Rejected by Admin";
    this.laundry.rejectLaundryReqbyId(id,this.rejectReq.reason);
}

  removeLaundryReq(ReqId: number) {
       this.laundry.deleteLaundryRequestById(ReqId).subscribe(
        (data:any)=>{
          window.location.reload();
          this.snack.open('Deleted!','OK',{
            duration:3000,
          })
        },
        (error)=>{
          this.snack.open('Invalid Details! Try again','OK',{
            duration:3000,
          })
        }
      )
  }
}
