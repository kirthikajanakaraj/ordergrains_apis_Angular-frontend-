import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeseedcomponentComponent} from './homeseedcomponent/homeseedcomponent.component';
import { HeadercomponentComponent } from './headercomponent/headercomponent.component';
import { FootercomponentComponent } from './footercomponent/footercomponent.component';
import { SeedcatlogcomponentComponent } from './seedcatlogcomponent/seedcatlogcomponent.component';
import { RouterModule } from '@angular/router';
import { ProductdetailscomponentComponent } from './productdetailscomponent/productdetailscomponent.component';
import { FeedbackcomponentComponent } from './feedbackcomponent/feedbackcomponent.component';
import { LogincomponentComponent } from './logincomponent/logincomponent.component';
import { SignupcomponentComponent } from './signupcomponent/signupcomponent.component';
import{FormsModule} from '@angular/forms';
import { DetailscomponentsComponent } from './detailscomponents/detailscomponents.component';
import { CartpagecomponentComponent } from './cartpagecomponent/cartpagecomponent.component';
import { PaymentcomponentsComponent } from './paymentcomponents/paymentcomponents.component';
import { AboutcomponentComponent } from './aboutcomponent/aboutcomponent.component';
import{ LoginservicesService } from './loginservices/loginservices.service';
import { CheckoutcomponentComponent } from './checkoutcomponent/checkoutcomponent.component';
import { ProfilecomponentComponent } from './profilecomponent/profilecomponent.component';
import { SuccesfullcomponentComponent } from './succesfullcomponent/succesfullcomponent.component';
import { StorageServiceModule } from 'angular-webstorage-service';

@NgModule({
  declarations: [
    AppComponent,HomeseedcomponentComponent, HeadercomponentComponent, FootercomponentComponent,
     SeedcatlogcomponentComponent, ProductdetailscomponentComponent, FeedbackcomponentComponent,
     LogincomponentComponent, SignupcomponentComponent, DetailscomponentsComponent, CartpagecomponentComponent,
      PaymentcomponentsComponent, AboutcomponentComponent, CheckoutcomponentComponent, ProfilecomponentComponent,
       SuccesfullcomponentComponent, 
  ],
  imports: [
    BrowserModule,FormsModule, HttpClientModule, StorageServiceModule,
    AppRoutingModule,RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path:'home',component:HomeseedcomponentComponent 
      },
      {
        path:'seedcatlog',component:ProductdetailscomponentComponent
      },
      {
        path:'feedback',component: FeedbackcomponentComponent
      },
      {
        path:'login',component: LogincomponentComponent
      },
      {
        path:'signup',component: SignupcomponentComponent
      },
      {
        path:'details/:id',component: DetailscomponentsComponent
      },
      {
        path:'add',component: CartpagecomponentComponent
      },
      {
        path:'payment',component: PaymentcomponentsComponent
      },
      {
        path:'about',component: AboutcomponentComponent
      },
      {
        path:'sucess',component: SuccesfullcomponentComponent
      },
    
     
     



      { path: '**', component: HomeseedcomponentComponent  }
      
    ]),
  ],
  providers: [LoginservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
