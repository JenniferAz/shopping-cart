import { Component, Input } from '@angular/core'
import { Amount, Discount } from '../../models'

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent {

  @Input() items: number
  @Input() discounts: Discount[]
  @Input() subtotal: Amount
  @Input() total: Amount

}
