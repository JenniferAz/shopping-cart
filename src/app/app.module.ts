import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { OrderSummaryComponent, ProductComponent, ProductListComponent } from './components'
import { CartComponent } from './pages'
import { CartService, DatasetService } from './providers'

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    OrderSummaryComponent,
    ProductListComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CartService, DatasetService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
