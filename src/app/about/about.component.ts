import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  public registerForm! :FormGroup ;
  name!: string;
  email!: string;
  password!: string;
  confirmPassword!:string;
  phone!:number;
  username:any;
  surname:any;
  getData: any;
constructor(private Arouter:Router, private formBuilder: FormBuilder){

}
navigateToHome(){
  this.Arouter.navigate(["/home"])
}
ngOnInit(){
  this.username = localStorage.getItem("name");
  console.log(this.username);
  this.surname = localStorage.getItem("surname");
  console.log(this.surname);
  this.registerForm = this.formBuilder.group({

    name: new FormControl('', Validators.required),
    email: new FormControl('',[ Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8)]),
    confirmPassword: new FormControl('',[
      Validators.required,
      Validators.minLength(8)]),
    phone: new FormControl('', Validators.required)
    
  })

  this.getData();
}
submit(){
  console.log(this.registerForm.value);
}

}

