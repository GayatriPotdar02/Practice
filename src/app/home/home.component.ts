import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  

  
constructor(private router:Router){

}
ngOnInit(){
 
}
men(){
  this.router.navigate(["/men"]);
}

women(){
  this.router.navigate(["/women"]);
}
login(){
  this.router.navigate(["/login"]);
}
cart(){
  this.router.navigate(["/cart"]);
}

}
