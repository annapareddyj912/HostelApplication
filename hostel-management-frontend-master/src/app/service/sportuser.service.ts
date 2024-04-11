import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import baseUrl from "./helper";
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class SportuserService {

  constructor(private http:HttpClient,private login:LoginService) {
  }

  public viewSportlist()
  {
    return this.http.get(`${baseUrl}/ap1/v1/Sports_e`)
  }

  public addRequest(sportuser:any)
  {
    return this.http.post(`${baseUrl}/ap1/v1/Sports_m`,sportuser)
  }

  public viewRequestlist()
  {
    return this.http.get(`${baseUrl}/ap1/v1/Sports_m`)
  }

  public viewStatuslist()
  {
    return this.http.get(`${baseUrl}/ap1/v1/Sports_m/stat`)
  }

  public grantReq(rid:any) {
    console.log(rid)
    return this.http.put(`${baseUrl}/ap1/v1/Sports_m/${rid}`,null)
  }

  public grantReq2(rid:any) {
    console.log(rid)
    return this.http.put(`${baseUrl}/ap1/v1/Sports_m/rej/${rid}`,null)
  }

  public grantUpdate(eid:any, element:any) {
    console.log(element)
    return this.http.put(`${baseUrl}/ap1/v1/Sports_e/${eid}`, element)
  }


  public addEquipment(sportequip:any)
  {
    return this.http.post(`${baseUrl}/ap1/v1/Sports_e`,sportequip)
  }

  public updateEquipq(eid:any , sportc: any)
  {
    const headers = new HttpHeaders().set('Authorization','Bearer '+this.login.getToken())
    console.log(headers);
    return this.http.put(`${baseUrl}/ap1/v1/Sports_e/up/${eid}`, sportc,{headers})
  }

}
