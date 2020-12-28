import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartCheckoutComponent } from './cart-checkout/cart-checkout.component';

const routes: Routes = [
  {path: 'checkout', component: CartCheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { }
