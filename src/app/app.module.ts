import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PigCardComponent } from './pig-card/pig-card.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { PigSettingsComponent } from './pig-settings/pig-settings.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import {APP_CONFIG, APP_SERVICE_CONFIG} from "./app-config.service";
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { SendMoneyFormComponent } from './send-money-form/send-money-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PigCardComponent,
    NavigationBarComponent,
    PigSettingsComponent,
    HeaderComponent,
    DashboardComponent,
    SendMoneyFormComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [{
    provide: APP_SERVICE_CONFIG,
    useValue: APP_CONFIG,
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
