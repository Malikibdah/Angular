import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UrlService {



  email: BehaviorSubject<string> = new BehaviorSubject<string>("");

  emailaddress = this.email.asObservable();


  constructor(private http: HttpClient) { }
  staticData = "https://localhost:7081/api"

  getServices(): Observable<any> {

    return this.http.get<any>(`${this.staticData}/Services`)
  }
  ////////////////////////////////////////////////////////////////
  getSubServicesbyServiceId(id : any): Observable<any> {

    return this.http.get<any>(`${this.staticData}/SubServices/GetSubServicesbyServiceID/${id}`)
  }
  ////////////////////////////////////////////////////////////////
  getSubServicesById(id: any): Observable<any> {

    return this.http.get<any>(`${this.staticData}/SubServices/GetSubServicesbyID/${id}`)
  }
  ///////////////////////////////////////////////////////////////
  getSubscribtionData(): Observable<any> {

    return this.http.get<any>(`${this.staticData}/Subscribtion`)
  }
  ///////////////////////////////////////////////////////////////
  addUserSubscription(data: any): Observable<any> {

    return this.http.post<any>(`${this.staticData}/UserSubscribtion` , data)
  }
  ///////////////////////////////////////////////////////////////
  addUserRegistration(data: any): Observable<any> {
    return this.http.post<any>(`${this.staticData}/User`, data)
  }
  ///////////////////////////////////////////////////////////////
  loginUser(data: any): Observable<any> {
    return this.http.post<any>(`${this.staticData}/User/login`, data)
  }
  ///////////////////////////////////////////////////////////////
  addServiceAPI(data: any): Observable<any> {
    return this.http.post<any>(`${this.staticData}/Services/addServices`, data)
  }

  ///////////////////////////////////////////////////////////////
  PUTService(id: any, data: any): Observable<any> {
    return this.http.put<any>(`${this.staticData}/Services/editService/${id}`, data)
  }
}
