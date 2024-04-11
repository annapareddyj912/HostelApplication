import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserService 
{

  //auto wire dependency inject
  constructor(private http:HttpClient){
   }

  //add user
  public addUser(user:any)
  {
    return this.http.post(`${baseUrl}/user/`,user)
  }
  public viewUser(userName:any)
  {
    return this.http.get(`${baseUrl}/user/${userName}`)
  }
  public deleteUser(id:any)
  {
    return this.http.delete(`${baseUrl}/user/${id}`)
  }
  public viewalluser()
  {
    return this.http.get(`${baseUrl}/user/getALL`)
  }

  public exportpdf()
  {

    return this.http.get(`${baseUrl}/user/export/pdf`,{responseType:'blob'})
  }


  public setfees(feesmonth:any)
  {
    return this.http.post(`${baseUrl}/user/setfees/${feesmonth.hostelfee}/${feesmonth.messfee}`,{})
  }

  /*public updatefees(feesmonth:any)
  {
    return this.http.put(`${baseUrl}/user/updatefees`,feesmonth)
  }*/
  public viewfees()
  {
    return this.http.get(`${baseUrl}/user/viewfees`)
  }


  public updatefees(hostelfee:number,messfee:number)
  {
    return this.http.put(`${baseUrl}/user/updatefees/${hostelfee}/${messfee}`,{})
  }

  public calculate (id:number)
  {
    return this.http.get(`${baseUrl}/user/showfees/${id}`)
  }


public countofrooms()
{
  return this.http.get(`${baseUrl}/user/countofrooms`)
}

public countoffreerooms()
{
  return this.http.get(`${baseUrl}/user/countoffreerooms`)

}
public  isoccupied(id:number)
{
  return this.http.get(`${baseUrl}/user/isoccupied/${id}`)
  
  }

  public initializeroom(room_id:number)
  {
    return this.http.post(`${baseUrl}/user/initialize_room/${room_id}`,{})
  
  }

  public assignrooms(room:number,stud:number,start:string,end:string)
  {
    console.log(room)
    return this.http.post(`${baseUrl}/user/Assignroom/${room}/${stud}/${start}/${end}`,{})
  }

  public getroombystudid(userid:number)
  {
    return this.http.get(`${baseUrl}/user/getroombyid/${userid}`) 
  }

  public vacateroom(userid:number)
  {
    return this.http.delete(`${baseUrl}/user/vacateroom/${userid}`) 
  }


  public updaterooms(room:number,stud:number,start:string,end:string)
  {
    console.log(room)
    return this.http.post(`${baseUrl}/user/updateroom/${room}/${stud}/${start}/${end}`,{})
  }


  public Exportpdf(userid:number)
  {
    return this.http.get(`${baseUrl}/user/Export/${userid}/Pdf`,{responseType:'blob'})
  }

  public ROOMDETAILS(stud_id:number)
  {
    return this.http.get(`${baseUrl}/user/ROOMDETAILS/${stud_id}`)
  }
  //get email id based on student id
  public getEmailIdByStudId(id:number){
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text'
    }
    return this.http.get<any>(`${baseUrl}/user/get-email-address/${id}`,requestOptions)
  }

}

