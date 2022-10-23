import { PIG_TYPES } from "../model/pig-types-enum";

  export interface PigSettings {
    type: PIG_TYPES,
    budgetLimit: number,
    rate: number,
    period: number,
    user: number
  }
