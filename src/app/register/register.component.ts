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
    password:['',[Validators.required,Validators.minLength(8)]]
  });
}
submit():void{
  this.http.post<any>('http://localhost:8000/api/register', this.form.getRawValue()).subscribe(
      response => {
        // Vérifiez si la réponse contient un ID utilisateur
        if (response && response.user_id) {
          // Enregistrez l'ID utilisateur dans le localStorage
          localStorage.setItem('user_id', response.user_id);
          console.log('Utilisateur enregistré, ID :', response.user_id);
        }
        
        // Redirigez l'utilisateur vers la page 'land'
        this.router.navigate(['/land']);
      },
      error => {
        // Gérer les erreurs
        console.error('Erreur lors de l\'enregistrement:', error);
      }
   );

   
}
}
