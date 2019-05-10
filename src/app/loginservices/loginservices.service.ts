import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class LoginservicesService {
status:boolean=false;
userdetails;
obs = new Subject();

  constructor(private http: HttpClient, @Inject(SESSION_STORAGE) private storage: StorageService) { }



  loginservice(userdetails): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    this.userdetails=userdetails;
    console.log("login service------>",userdetails);


    this.storage.set('session_email', this.userdetails.email);
    this.storage.set('status',this.status);
    this.obs.next(false);
    return this.http.post("http://localhost:8080/order-grains-apis/rest/login",userdetails, httpOptions);
    
  }









  emailsubmitsignup(userdetails): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    console.log("pandi------>", userdetails);
    return this.http.post("http://localhost:8080/order-grains-apis/rest/userregistration", userdetails, httpOptions);
  }
  
  
  productsspecification(id): Observable<any> {
  
    return this.http.get("http://localhost:8080/order-grains-apis/rest/products/"+ id);

  }
  profileservice(userdetails): Observable<any>
  {
    return this.http.get("http://localhost:8080/order-grains-apis/rest/profile/"+ userdetails.email);
  }

  

}
