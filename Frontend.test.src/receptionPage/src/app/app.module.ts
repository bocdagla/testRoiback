import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { MatRadioModule } from '@angular/material/radio'
import { MatButtonToggleModule } from '@angular/material/button-toggle'
import { SingupComponent } from './singup/singup.component';
import { HotelGuestFormComponent } from './hotel-guest-form/hotel-guest-form.component';
import { TravelAgencyFormComponent } from './travel-agency-form/travel-agency-form.component';
import { CompanyFormComponent } from './company-form/company-form.component';
import { CommonModule } from '@angular/common'
import { MatFormFieldModule} from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'
import { ThankYouPageComponent } from './thank-you-page/thank-you-page.component'

@NgModule({
  declarations: [
    AppComponent,
    SingupComponent,
    HotelGuestFormComponent,
    TravelAgencyFormComponent,
    CompanyFormComponent,
    ThankYouPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    MatRadioModule,
    MatButtonToggleModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
