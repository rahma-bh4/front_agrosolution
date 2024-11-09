import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { first } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  form!:FormGroup;
  formBuilder: any;
  constructor(private authService:AuthService ,
    private http:HttpClient,
    private  router:Router
  ){

  }
  ngOnInit(): void {
  this.form=this.formBuilder.group({
    email:"",
    password:""
  });
  }
  submit(){
   this.http.post("http://localhost:8000/api/login",this.form.getRawValue(),{withCredentials:true})
   .subscribe(()=>this.router.navigate(['/']));
  }
 
}
