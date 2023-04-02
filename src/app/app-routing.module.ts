import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path:"",
    redirectTo:"login",
    pathMatch:"full"
  },
  {
    path:"login",
    component:LoginComponent,
    
  },
  {
    path:"home",
    component:HomeComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"product",
    component:ProductComponent
  },
  {
    path:"cart",
    component:CartComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
