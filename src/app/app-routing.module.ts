import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PigSettingsComponent } from './pig-settings/pig-settings.component';
import {PigCardComponent} from "./pig-card/pig-card.component";
import {SendMoneyFormComponent} from "./send-money-form/send-money-form.component";

const routes: Routes = [
  {path: 'settings', component: PigSettingsComponent},
  {path: 'pigBanks', component: PigCardComponent},
  {path: 'sendMoney', component: SendMoneyFormComponent},
  { path: '',   redirectTo: '/pigBanks', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
