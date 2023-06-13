import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
   loginDataUrl='http://localhost:3000/loginUsers';
  constructor(private myservice:MyserviceService, private http:HttpClient) { 


  }
  loginUser(loginData:any){
    console.log(loginData);
  
  }
}
