import { Amount } from './amount.model'
import { Discount } from './discount.model'
import { Product } from './product.model'
import { Rule } from './rule.model'

export class Checkout {

  public subtotal: Amount
  public discounts: Discount[]

  constructor(public pricingRules: Rule[], public products: Product[] = []) {
    this.subtotal = new Amount()
    this.discounts = pricingRules.map(pricingRule => new Discount(pricingRule.id, pricingRule.description))
  }

  scan(product: Product) {
    this.products.push(product)
    this.recomputeDiscounts(product)
    this.subtotal.value += product.price.value
  }

  remove(product: Product) {
    if (this.products.length) {
      const index = this.products.findIndex(prod => prod.code === product.code)
      if (index >= 0) {
        this.products.splice(index, 1)
        this.recomputeDiscounts(product)
        this.subtotal.value -= product.price.value
      }
    }
  }

  recomputeDiscounts(involvedProduct: Product) {
    // Find the rules that apply to the scanned product
    const matchingRules = this.pricingRules.filter(rule => rule.productCodes.includes(involvedProduct.code))
    if (matchingRules) {
      // Update each discount in which the product is involved with the new value computed by the rule
      matchingRules.map(rule => {
        this.discounts.find((discount: Discount) => discount.id === rule.id).amount.value =
          rule.computeDiscount(this.products.filter(product => rule.productCodes.includes(product.code)))
      })
    }
  }

  price(): Amount {
    return {
      ...this.subtotal,
      value: this.subtotal.value - this.discounts.reduce((discountsSum, discount: Discount) => {
        discountsSum += discount.amount.value
        return discountsSum
      }, 0)
    }
  }

}
