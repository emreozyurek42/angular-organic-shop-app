import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { AdminAuthGuardService } from './services/admin-auth-guard.service';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuardService } from '../shared/services/auth-guard.service';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([ 
      { 
        path:'admin/products/new' , 
        component: ProductFormComponent,
        canActivate:[AuthGuardService,AdminAuthGuardService]
      },
      { 
        path:'admin/products/:id' , 
        component: ProductFormComponent,
        canActivate:[AuthGuardService,AdminAuthGuardService]
      },
      { 
        path:'admin/products' , 
        component: AdminProductsComponent,
        canActivate:[AuthGuardService,AdminAuthGuardService]
      },

      { 
        path:'admin/orders' , 
        component: AdminOrdersComponent,
        canActivate:[AuthGuardService, AdminAuthGuardService]}
    ])

  ],
  declarations: [
    ProductFormComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
  ],
  providers:[
    AdminAuthGuardService
  ]
})
export class AdminModule { }
