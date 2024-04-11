import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { laundryRequest } from '../pages/user/laundry/pending-request/pending-request.component';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LaundryService {

  constructor(private http:HttpClient,private snack:MatSnackBar) { }

  //add laundry request
  public addLaundryRequest(laundryRequest:any)
  {
    return this.http.post(`${baseUrl}/laundry/`,laundryRequest)
  }

    //set laundry prices
    public setLaundryPrices(laundryprices:any)
    {
      return this.http.post(`${baseUrl}/laundry/setLaundryPrices`,laundryprices)
    }

  //update laundry request by id
  public updateLaundryRequestById(reqId:number,weight:number,dryCloths:boolean,numIronCloths:number)
  {
    this.http.put<any>(`${baseUrl}/laundry/update/${reqId}/${weight}/${dryCloths}/${numIronCloths}`,{}).subscribe(
      (data:any)=>{
        this.snack.open('Updated!','OK',{
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

  //accept laundry request by id
  public acceptLaundryReqbyId(reqId:number)
  {
    this.http.put<any>(`${baseUrl}/laundry/accept-pending-req/${reqId}`,{}).subscribe(
      (data:any)=>{
        window.location.reload();
        this.snack.open('Accepted!','OK',{
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

  //complete laundry request by id
  public completeLaundryReqbyId(reqId:number,amount:number)
  {
    this.http.put<any>(`${baseUrl}/laundry/complete-pending-req/${reqId}/${amount}`,{}).subscribe(
      (data:any)=>{
        window.location.reload();
        this.snack.open('Request completed!','OK',{
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
    //reject laundry request by id
    public rejectLaundryReqbyId(reqId:number,reason:string)
    {
      this.http.put<any>(`${baseUrl}/laundry/reject-pending-req/${reqId}/${reason}`,{}).subscribe(
        (data:any)=>{
          window.location.reload();
          this.snack.open('Rejected!','OK',{
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

    //change payment status by Reqid
    public PaymentReceivedById(reqId:number)
    {
      this.http.put<any>(`${baseUrl}/laundry/update-payment-status/${reqId}`,{}).subscribe(
        (data:any)=>{
          window.location.reload();
          this.snack.open('Payment status Changed!','OK',{
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

  //delete laundry request by id
  public deleteLaundryRequestById(reqId:number)
  {
    return this.http.delete(`${baseUrl}/laundry/${reqId}`)
  }


  //get pending requests by id
  public getPendingRequestsById(id:number)
  {
    return this.http.get<laundryRequest[]>(`${baseUrl}/laundry/pending-req/${id}`)
  }

    //get pending requests by req id
    public getPendingRequestsByReqId(id:number)
    {
      return this.http.get<laundryRequest>(`${baseUrl}/laundry/pending-req-by-id/${id}`)
    }

  //get all pending requests
  public getPendingRequests()
  {
    return this.http.get<laundryRequest[]>(`${baseUrl}/laundry/pending-req`)
  }

  //get accepted requests by id
  public getAcceptedRequestsById(id:number)
  {
    return this.http.get<laundryRequest[]>(`${baseUrl}/laundry/accepted-req/${id}`)
  }

  //get all accepted requests
  public getAcceptedRequests()
  {
    return this.http.get<laundryRequest[]>(`${baseUrl}/laundry/accepted-req`)
  }

  //get laundry prices
  public getLaundryPrices()
  {
    return this.http.get(`${baseUrl}/laundry/getLaundryPrices`)
  }

  //get rejected requests by id
  public getRejectedRequestsById(id:number)
  {
    return this.http.get<laundryRequest[]>(`${baseUrl}/laundry/rejected-req/${id}`)
  }

  //get all rejected requests
  public getRejectedRequests()
  {
    return this.http.get<laundryRequest[]>(`${baseUrl}/laundry/rejected-req`)
  }

  //get completed requests by id
  public getCompletedRequestsById(id:number)
  {
    return this.http.get<laundryRequest[]>(`${baseUrl}/laundry/completed-req/${id}`)
  }

  //get all completed requests
  public getCompletedRequests()
  {
    return this.http.get<laundryRequest[]>(`${baseUrl}/laundry/completed-req`)
  }
}


