import { Amount } from './amount.model'
import { Product } from './product.model'

export class Rule {

  constructor(public id: string,
              public description: string,
              public productCodes: string[],
              public computeDiscount: (products: Product[]) => Amount) {
  }
}
