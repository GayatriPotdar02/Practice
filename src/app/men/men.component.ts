import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent {
  
boxes = [ 
  {
    id:1,
    img:"../assets/image/m8.jpg",
    name:"pant",
    description:"Free Delivery",
    price:"989",  
  },
  {
    id:2,
    img:"../assets/image/m7.jpg",
    name:"pant",
    description:"Free Delivery",
    price:"999",  
  },
  {

    img:"../assets/image/m6.jpg",
    name:"pant",
    description:"Free Delivery",
    price:"888",  
  },
  {

    img:"../assets/image/m5.jpg",
    name:"pant",
    description:"Free Delivery",
    price:"1208",  
  },
  {

    img:"../assets/image/m4.jpg",
    name:"pant",
    description:"Free Delivery",
    price:"908",  
  },
  {

    img:"../assets/image/m3.jpg",
    name:"pant",
    description:"Free Delivery",
    price:"898",  
  },
  {

    img:"../assets/image/m2.jpg",
    name:"pant",
    description:"Free Delivery",
    price:"998",  
  },
  {

    img:"../assets/image/m1.jpg",
    name:"pant",
    description:"Free Delivery",
    price:"1000",  
  }
  
];
  dialog: any;
  
  constructor(
    private myrouter:Router
 ){
   
 }

 home(){
   this.myrouter.navigate(["/home"]);
 }
 addtocart(box:any){
  console.log(box);
  localStorage.setItem("box", JSON.stringify(box));
  this.myrouter.navigate(["/cart"]);
 
 }
}
