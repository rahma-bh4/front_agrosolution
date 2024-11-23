import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  
  constructor(private authService:AuthService ,
    private http:HttpClient,
    private  router:Router,
    private formBuilder:FormBuilder
  ){

  }
  ngOnInit(): void {
  this.form=this.formBuilder.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(8)]]
  });
  }
  onLogin() {
   this.http.post<any>("http://localhost:8000/api/login",this.form.getRawValue(),{withCredentials:true})
   .subscribe(res=>{
    
    localStorage.setItem('user_id', res.user_id);
    this.router.navigate(["/recommendation"]);
   }
  
  );

}}
