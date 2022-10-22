import { Component, OnInit } from '@angular/core';
import {PigCardService} from "./service/pig-card.service";
import {PigBankModel} from "./pig";
import {map} from "rxjs";


@Component({
  selector: 'app-pig-card',
  templateUrl: './pig-card.component.html',
  styleUrls: ['./pig-card.component.css']
})
export class PigCardComponent implements OnInit {
  pigBanks: PigBankModel[] = [];

  constructor(public pigCardService: PigCardService) {
    // this.pigBanks = {
    //   category: 0,
    //   limit: 0,
    //   accumulating_rate: 0,
    //   current_amount: 0,
    //   total_amount: 0,
    //   user: 0
    // }
    this.pigCardService
      .getPigBanks()
      .subscribe((e) => {
        this.pigBanks = e['piggy_banks'];
      });

  }

  ngOnInit(): void {

  }

}
