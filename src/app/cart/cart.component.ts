import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(private myrouter:Router){}
show!:any;
  name="Gayatri";
  movetoCart: any;
  home(){
    this.myrouter.navigate(["/home"]);
  }
ngOnInit(){
 
    this.movetoCart = JSON.parse(localStorage.getItem("box") || "");
    console.log(this.movetoCart );
  }
 
}

