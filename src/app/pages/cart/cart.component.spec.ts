import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { OrderSummaryComponent, ProductComponent, ProductListComponent } from '../../components'

import { CartComponent } from './cart.component'

describe('CartComponent', () => {
  let component: CartComponent
  let fixture: ComponentFixture<CartComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CartComponent, ProductListComponent, OrderSummaryComponent, ProductComponent]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
