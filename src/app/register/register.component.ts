import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
form!:FormGroup;
constructor(private formBuilder:FormBuilder,
  private http:HttpClient,
  private router:Router
)
{}
ngOnInit(): void {
  this.form=this.formBuilder.group({
    name:['',[Validators.required]],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required]]
  });
}
submit():void{
  this.http.post('http://localhost:8000/api/register', this.form.value, {
    headers: { 'Content-Type': 'application/json' }
  }).subscribe(
    ()=>{
      this.router.navigate(['/login'])
    }
   );
}
}
