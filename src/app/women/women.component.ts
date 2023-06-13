import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent {
  boxes = [ 
    {
      id:1,
      img:"../assets/image/w1.jpg",
      name:"Top",
      description:"Free Delivery",
      price:"989",  
    },
    {
      id:2,
      img:"../assets/image/w2.jpg",
      name:"Kurta",
      description:"Free Delivery",
      price:"999",  
    },
    {
  
      img:"../assets/image/w3.jpg",
      name:"Top",
      description:"Free Delivery",
      price:"888",  
    },
    {
  
      img:"../assets/image/w4.jpg",
      name:"Anarkali",
      description:"Free Delivery",
      price:"1208",  
    },
    {
  
      img:"../assets/image/w5.jpg",
      name:"Anarkali",
      description:"Free Delivery",
      price:"908",  
    },
    {
  
      img:"../assets/image/w6.jpg",
      name:"Saree",
      description:"Free Delivery",
      price:"898",  
    },
    {
  
      img:"../assets/image/w7.jpg",
      name:"Saree",
      description:"Free Delivery",
      price:"998",  
    },
    {
  
      img:"../assets/image/w8.jpg",
      name:"Saree",
      description:"Free Delivery",
      price:"1000",  
    }
    
  ];
  constructor(
     private myrouter:Router
  ){
    
  }
 
  gotohome(){
    this.myrouter.navigate(["/home"]);
  }
  addtocart(box:any){
    console.log(box);
    localStorage.setItem("box", JSON.stringify(box));
    this.myrouter.navigate(["/cart"]);
   
   }
}
