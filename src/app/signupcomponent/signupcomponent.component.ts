import { Component, OnInit } from '@angular/core';
import{LoginservicesService} from'../loginservices/loginservices.service';

@Component({
  selector: 'app-signupcomponent',
  templateUrl: './signupcomponent.component.html',
  styleUrls: ['./signupcomponent.component.css']
})
export class SignupcomponentComponent implements OnInit {
  //public deatils:userdetails[];
  constructor(private http:LoginservicesService ) { }

  ngOnInit() {
  }
  emailsubmitsignup(register)
  {
    this.http.emailsubmitsignup(register).subscribe(register=>
      {
       console.log(register); 
      });
      
      
    };
   
  } 

// interface userdetails
// {
// username;
// password;
// email;
// phone;
// }
