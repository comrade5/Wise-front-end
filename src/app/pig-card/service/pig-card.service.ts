import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {APP_SERVICE_CONFIG} from "../../app-config.service";
import {AppConfig} from "../../appconfig.interface";
import {PigBankModel} from "../pig";
import {map, Observable} from "rxjs";
import {PigSettings} from "../../pig-settings/settings-model";
import {PigSettingsComponent} from "../../pig-settings/pig-settings.component";

export interface PiggyBank {
  piggy_banks: Array<PigBankModel>;
  user_bank: number;
}

@Injectable({
  providedIn: 'root'
})
export class PigCardService {

  piggyBank: PiggyBank | undefined;

  constructor(private http: HttpClient, @Inject(APP_SERVICE_CONFIG) private config: AppConfig) {
  }

  getPigBanks() : Observable<PiggyBank> {
    return this.http.get<PiggyBank>(this.config.apiEndpoint+'/piggy_bank/?user=1');
  }

  savePigBank(body: PigSettings) {
    return this.http.post(this.config.apiEndpoint+'/piggy_bank/', body);
  }
}
