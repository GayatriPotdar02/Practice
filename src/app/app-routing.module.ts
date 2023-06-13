import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenComponent } from './men/men.component';
import { RegisterComponent } from './register/register.component';
import { WomenComponent } from './women/women.component';

const routes: Routes = [
  {
    path:"home" ,component:HomeComponent
  },
  {
    path:"about" ,component:AboutComponent
  },
  {
    path:'',redirectTo:'/login',pathMatch:'full'
  },
  {
    path:"men",component:MenComponent
  },
  {
    path:"women" , component:WomenComponent
  },
  {
    path:"login" , component:LoginComponent
  },
  {
    path:"register", component:RegisterComponent
  },
  {
    path:"cart" , component:CartComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
