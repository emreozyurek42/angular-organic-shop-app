import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ShoppingCartSummaryComponent } from './components/shopping-cart-summary/shopping-cart-summary.component';
import { ShippingFormComponent } from './components/shipping-form/shipping-form.component';
import { ProductsComponent } from './components/products/products.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { ProductFilterComponent } from './components/products/product-filter/product-filter.component';
import { AuthGuardService } from '../shared/services/auth-guard.service';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path:'products' , component:ProductsComponent },
      { path:'shopping-cart' , component: ShoppingCartComponent},
      { path:'check-out' , component: CheckOutComponent,canActivate:[AuthGuardService]},
      { path:'order-success/:id' , component: OrderSuccessComponent,canActivate:[AuthGuardService]},
      { path:'my/orders' , component: MyOrdersComponent,canActivate:[AuthGuardService]}, 
   
    ])
  ],
  declarations: [
    ShoppingCartSummaryComponent,
    ShippingFormComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    ProductFilterComponent
  ]
})
export class ShoppingModule { }
