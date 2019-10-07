import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Product } from '../../models'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  @Input() cartProducts: Product[]
  @Input() availableProducts: Product[]
  @Output() increaseProduct = new EventEmitter()
  @Output() decreaseProduct = new EventEmitter()

  getQuantity(code: string) {
    return this.cartProducts.filter(cartProduct => cartProduct.code === code).length
  }

}
