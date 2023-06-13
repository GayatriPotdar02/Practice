import { registerLocaleData } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public logInForm!: FormGroup;
  formBuilder: any;
  userEmail="gayatripotdar1@gmail.com";
  userPassword="1234";
  public email:any;
  public password:any;

  constructor(private myrouter:Router , private formbuilder:FormBuilder){
   
  }
  ngOnInit(){
    this.logInForm = this.formbuilder.group({
  
      email: new FormControl('',[ Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required, Validators.minLength(8)]),
     })
    
  }

  logIn(){
    console.log(this.logInForm.value);
    if(this.logInForm.value.email == this.userEmail && this.logInForm.value.password == this.userPassword){
      alert("Login successfully.");
      this.myrouter.navigate(["/home"]);
    }
    else{
      alert("Login Failed");
    }
    let loginData ={
      email: this.email,
      password: this.password
    }
    console.log(loginData);
    
   
     }


}





