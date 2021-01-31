import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BreakfastComponent } from './components/breakfast/breakfast.component';
import { CafeComponent } from './components/cafe/cafe.component';
import { CartComponent } from './components/cart/cart.component';
import { GoodsComponent } from './components/goods/goods.component';
import { HomeComponent } from './components/home/home.component';
import { JuicesComponent } from './components/juices/juices.component';
import { LoginComponent } from './components/login/login.component';
import { LunchComponent } from './components/lunch/lunch.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SignupComponent } from './components/signup/signup.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'cart',component:CartComponent},
  {path:'admin',component:GoodsComponent},
  {path:'breakfast',component:BreakfastComponent},
  {path:'lunch',component:LunchComponent},
  {path:'juices',component:JuicesComponent},
  {path:'cafe',component:CafeComponent},
  {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
