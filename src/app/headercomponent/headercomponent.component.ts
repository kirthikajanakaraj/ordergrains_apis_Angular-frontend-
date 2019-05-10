import { Component, OnInit, Inject } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
import { LoginservicesService } from '../loginservices/loginservices.service';

@Component({
  selector: 'app-headercomponent',
  templateUrl: './headercomponent.component.html',
  styleUrls: ['./headercomponent.component.css']
})
export class HeadercomponentComponent implements OnInit {
public get_session_email :any;
public show ;

  constructor( @Inject(SESSION_STORAGE) private storage: StorageService, private loginService : LoginservicesService) { }

  ngOnInit() 
  {
   
    if(this.storage.get('status')===null){
      this.show = true;
    }
    else{
      this. get_session_email= this.storage.get('session_email');
    }
    this.loginService.obs.subscribe(res=>{
      this.show = this.storage.get('status');
      this. get_session_email= this.storage.get('session_email');
 })
  }

}
