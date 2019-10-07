import { Component, OnDestroy } from '@angular/core'
import { Subscription } from 'rxjs'
import { Amount, Discount, Product } from '../../models'
import { CartService, DatasetService } from '../../providers'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnDestroy {

  public subscription: Subscription
  public availableProducts: Product[]
  public cartProducts: Product[]
  public discounts: Discount[]
  public subtotal: Amount
  public totalPrice: Amount

  constructor(public cartService: CartService, public datasetService: DatasetService) {
    this.subscription = cartService.getCheckout().subscribe(checkout => {
      this.cartProducts = checkout.products
      this.discounts = checkout.discounts
      this.subtotal = checkout.subtotal
      this.totalPrice = checkout.price()
    })
    this.availableProducts = datasetService.getAvailableProducts()
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  increaseProduct(product: Product) {
    this.cartService.addProduct(product)
  }

  decreaseProduct(product: Product) {
    this.cartService.removeProduct(product)
  }
}
