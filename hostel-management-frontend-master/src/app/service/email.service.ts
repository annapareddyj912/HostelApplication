import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http:HttpClient) { }
  sendEmail(data:any)
  {
      return this.http.post(`${baseUrl}/sendemail`,data)
  }
}
