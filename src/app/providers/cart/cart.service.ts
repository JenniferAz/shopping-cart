import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { Checkout, Product } from '../../models'
import { DatasetService } from '../dataset/dataset.service'

@Injectable({
  providedIn: 'root'
})

export class CartService {

  // Cart data store and handling
  private checkoutSubject: BehaviorSubject<Checkout>
  private checkout: Checkout

  constructor(private datasetService: DatasetService) {
    this.checkout = new Checkout(datasetService.getAvailableRules())
    this.checkoutSubject = new BehaviorSubject(this.checkout)
  }

  getCheckout(): Observable<Checkout> {
    return this.checkoutSubject.asObservable()
  }

  addProduct(product: Product) {
    this.checkout.scan(product)
    this.checkoutSubject.next(this.checkout)
  }

  removeProduct(product: Product) {
    this.checkout.remove(product)
    this.checkoutSubject.next(this.checkout)
  }
}
