import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {LoginservicesService} from '../loginservices/loginservices.service';

@Component({
  selector: 'app-detailscomponents',
  templateUrl: './detailscomponents.component.html',
  styleUrls: ['./detailscomponents.component.css'],
})
export class DetailscomponentsComponent implements OnInit {

   constructor(private route: ActivatedRoute, private router:Router,private service: LoginservicesService) { }
 public details:items1[];
 id;

  ngOnInit() 
  {
    this.route.params.subscribe(params => {
     console.log('details component-->', params['id']);
      this.id=params['id'];
      console.log(this.id);
   });
   this.detailsfromdb(this.id);
  }
detailsfromdb(id){
  this.service.productsspecification(id).subscribe(res=>{
    this.details = res;
    console.log("deatils fom API=====================>>>>>>>>>>>>>>",this.details);
    console.log(res.pid);

    
  });
  
 
  
  
}
}
interface items1 {
  pid;
  pic;
  price;
  pname;
  specification;

}