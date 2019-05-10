import { Component, OnInit } from '@angular/core';
import { ProductservicesService } from '../productservices/productservices.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-productdetailscomponent',
  templateUrl: './productdetailscomponent.component.html',
  styleUrls: ['./productdetailscomponent.component.css'],
  providers: [ProductservicesService]
})
export class ProductdetailscomponentComponent implements OnInit {

  public product: items[];
  constructor(private service: ProductservicesService, private router: Router) { }

  ngOnInit() {
    this.productdetails();
  }
  
  productdetails() {
    this.service.productservices().subscribe(res => {
      this.product = res;
      console.log("ponkey<=>pandi--->", this.product);

    });
  }
  showDetails(id) {
   console.log(id);
    this.router.navigate(['seedcatlog/details'])
  }

}
interface items {
  id;
  pic;
  price;
  pname;
  specification;

}

