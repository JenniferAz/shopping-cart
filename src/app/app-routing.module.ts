import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { CartComponent } from './pages'

const routes: Routes = [{ path: '', component: CartComponent }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
