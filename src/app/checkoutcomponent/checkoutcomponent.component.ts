import { Component, OnInit } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
@Component({
  selector: 'app-checkoutcomponent',
  templateUrl: './checkoutcomponent.component.html',
  styleUrls: ['./checkoutcomponent.component.css']
})
export class CheckoutcomponentComponent implements OnInit   {
  ngOnInit() 
  {
   
   
  }

  constructor() { }

  
  checkoutsession()
  {
console.log("http://localhost:8080/order-grains-apis/rest/checkout");
  }
}
