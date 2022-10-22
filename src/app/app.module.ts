import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PigCardComponent } from './pig-card/pig-card.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { PigSettingsComponent } from './pig-settings/pig-settings.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    PigCardComponent,
    NavigationBarComponent,
    PigSettingsComponent,
    HeaderComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
