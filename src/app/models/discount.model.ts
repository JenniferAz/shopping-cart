import { Amount } from './amount.model'

export class Discount {

  constructor(public id: string,
              public description: string,
              public amount: Amount = new Amount()) {
  }
}
