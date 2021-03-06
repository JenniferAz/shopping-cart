import { Injectable } from '@angular/core'
import { Amount, Product, Rule } from '../../models'

@Injectable({
  providedIn: 'root'
})

export class DatasetService {

  // Products and rules. Data that could come from a server and be parsed here
  private availableProducts: Product[]
  private availableRules: Rule[]

  constructor() {
    this.availableProducts = [
      new Product('shirt.png', 'Cabify T-Shirt', 'TSHIRT', new Amount(20, '€')),
      new Product('mug.png', 'Cabify Coffee Mug', 'MUG', new Amount(7.50, '€')),
      new Product('cap.png', 'Cabify Cap', 'CAP', new Amount(5, '€'))
    ]

    this.availableRules = [
      new Rule(
        '#0',
        '2x1 Cap offer',
        ['CAP'],
        (productsForDiscount: Product[]) => productsForDiscount.length > 1 ?
            Math.floor(productsForDiscount.length / 2) * productsForDiscount[0].price.value : 0
      ),
      new Rule(
        '#1',
        'x3 T-Shirt offer',
        ['TSHIRT'],
        (productsForDiscount: Product[]) => productsForDiscount.length >= 3 ?
          productsForDiscount.length * (productsForDiscount[0].price.value - 19.00) : 0
      ),
      new Rule(
        '#2',
        'Free mug purchasing a T-Shirt and a Cap (not cumulative)',
        ['TSHIRT', 'CAP', 'MUG'],
        (productsForDiscount: Product[]) =>
          productsForDiscount.some(prod => prod.code === 'TSHIRT') &&
          productsForDiscount.some(prod => prod.code === 'CAP') &&
          productsForDiscount.some(prod => prod.code === 'MUG')
            ? 7.50 : 0
      )
    ]
  }

  getAvailableProducts(): Product[] {
    return this.availableProducts
  }

  getAvailableRules(): Rule[] {
    return this.availableRules
  }
}
