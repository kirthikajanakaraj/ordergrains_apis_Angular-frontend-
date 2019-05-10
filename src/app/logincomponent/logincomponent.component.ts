import { Component, OnInit, Inject } from '@angular/core';
import {LoginservicesService} from'../loginservices/loginservices.service';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';

@Component({
  selector: 'app-logincomponent',
  templateUrl: './logincomponent.component.html',
  styleUrls: ['./logincomponent.component.css'],
  



})
export class LogincomponentComponent implements OnInit {

  constructor(private loginservice:LoginservicesService, @Inject(SESSION_STORAGE) private storage: StorageService) { }
  public signin;
  // public session_email;

  ngOnInit() {
    // this.session_email=this.storage.get('session_email');
  }


  emailsubmit(userdetails)
    {
      this.loginservice.loginservice(userdetails).subscribe(res=>
        {
          this.signin=res;
          console.log('this.signin=',res.email);
        });
      
        // console.log(this.session_email);
        console.log('Template Driven data', userdetails);
        
    }

    
    
}
