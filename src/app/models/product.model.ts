import { Amount } from './amount.model'

export class Product {

  constructor(public image: string,
              public name: string,
              public code: string,
              public price: Amount) {

  }
}
