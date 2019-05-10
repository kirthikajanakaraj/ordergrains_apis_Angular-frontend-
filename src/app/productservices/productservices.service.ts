import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class ProductservicesService {

  constructor(private http:HttpClient) { }
  productservices():Observable<any>
  {
    const url="http://localhost:8080/order-grains-apis/rest/products";
    return this.http.get(url);
  }
}
