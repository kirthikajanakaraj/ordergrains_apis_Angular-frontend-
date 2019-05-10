import { Component, OnInit } from '@angular/core';
import {LoginservicesService} from'../loginservices/loginservices.service';

@Component({
  selector: 'app-profilecomponent',
  templateUrl: './profilecomponent.component.html',
  styleUrls: ['./profilecomponent.component.css']
})
export class ProfilecomponentComponent implements OnInit {

  public details;
  constructor(private service: LoginservicesService) 
  { 
  }

  ngOnInit() {
  }
  profile(email){
    this.service.profileservice(email).subscribe(res=>{
      this.details = res;
      console.log("deatils fom API=====================>>>>>>>>>>>>>>",this.details);
      console.log(res);
    });
  }
}


