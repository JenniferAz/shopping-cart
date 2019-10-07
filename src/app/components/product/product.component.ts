import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Product } from '../../models'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input() product: Product
  public _quantity: number
  @Input() set quantity(quantity: number) {
    this._quantity = quantity
    this.computeProductTotalPrice(quantity)
  }
  @Output() increaseProduct = new EventEmitter()
  @Output() decreaseProduct = new EventEmitter()
  public totalPrice: number

  computeProductTotalPrice(quantity: number) {
    this.totalPrice = this.product.price.value * quantity
  }

  decreaseQuantity() {
    this.decreaseProduct.emit(this.product)
  }

  increaseQuantity() {
    this.increaseProduct.emit(this.product)
  }
}
