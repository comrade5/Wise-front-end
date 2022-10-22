import { Component, Input, OnInit } from '@angular/core';
import { PIG_TYPES } from '../model/pig-types-enum';
import { PigSettings } from './settings-model';

@Component({
  selector: 'app-pig-settings',
  templateUrl: './pig-settings.component.html',
  styleUrls: ['./pig-settings.component.css']
})
export class PigSettingsComponent implements OnInit {

  model: PigSettings = {
    type: PIG_TYPES.CLOTHES,
    budgetLimit: 0,
    rate: 0,
    period: 0,
  };

  constructor() { 

  }


  ngOnInit(): void {
  }
          
  types = [PIG_TYPES.CLOTHES, PIG_TYPES.ENTERTAINMENT, PIG_TYPES.FOOD, PIG_TYPES.TRANSPORTATION]

  submitted = false;

  onSubmit() { this.submitted = true; console.log(this.model);}

  newSettings() {
    console.log(this.model);
  }

}
