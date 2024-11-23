import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-land-form',
  templateUrl: './land-form.component.html',
  styleUrl: './land-form.component.css'
})
export class LandFormComponent implements OnInit{
  result!: string ;
  errorMessage: string| null = null;
  predForm!:FormGroup;
  constructor(private fb: FormBuilder, private http: HttpClient,private router:Router) {}
    // Initialiser le formulaire avec les champs requis
    ngOnInit(): void {
      
    
    this.predForm = this.fb.group({
      N: ['', [Validators.required]],
      P: ['', [Validators.required]],
      K: ['', [Validators.required]],
      temp: ['', [Validators.required]],
      humidity: ['', [Validators.required]],
      ph: ['', [Validators.required]],
      rain: ['', [Validators.required]]
    });
    }
   /* submit() {
      if (this.predForm.valid) {
        // Récupérer l'ID utilisateur depuis le local storage
        const userId = Number(localStorage.getItem('user_id'));
        console.log("L'ID utilisateur est :", userId);
    
        if (isNaN(userId)) {
          this.errorMessage = 'Utilisateur non authentifié. Veuillez vous reconnecter.';
          return;
        }
    
        // Ajouter l'ID utilisateur aux données du formulaire
        const formData = { ...this.predForm.value, user_id: userId };
        console.log('Données envoyées :', formData);
    
        // Utilisez l'URL complète du backend (port 8000)
        this.http.post<any>('http://localhost:8000/api/recommendation', formData).subscribe({
          next: (response) => {
            console.log('Réponse du serveur :', response);
            this.result = response.resultat; 
            this.errorMessage = null;
            localStorage.setItem('user_id', response.user_id);
            // Naviguez vers la page de recommandation
            this.router.navigate(["/recommendation"]);
          },
          error: (error) => {
            console.error('Erreur lors de la requête :', error);
            this.errorMessage = 'Une erreur est survenue lors de la prédiction.';
          }
        });
      } else {
        this.errorMessage = 'Veuillez remplir tous les champs correctement.';
      }
    }*/
     /* submit() {
        if (this.predForm.valid) {
          // Récupérer l'ID utilisateur depuis le Local Storage
          const userId = localStorage.getItem('user_id');
          
          // Vérifiez si l'ID est valide
          if (!userId || isNaN(Number(userId))) {
            this.errorMessage = 'Utilisateur non authentifié. Veuillez vous reconnecter.';
            return;
          }
    
          // Ajouter l'ID utilisateur aux données du formulaire
          const formData = { ...this.predForm.value, user_id: Number(userId) };
          console.log('Données envoyées :', formData);
    
          // Envoyer la requête au backend
          this.http.post<any>('http://localhost:8000/api/recommendation', formData).subscribe({
            next: (response) => {
              console.log('Réponse du serveur :', response);
              this.result = response.resultat; // Stocker le résultat
              this.errorMessage = null;
    
              // Naviguer vers la page de recommandation
              this.router.navigate(['/recommendation']);
            },
            error: (error) => {
              console.error('Erreur lors de la requête :', error);
              this.errorMessage = 'Une erreur est survenue lors de la prédiction.';
            }
          });}}*/
        

        submit() {
          if (this.predForm.valid) {
            // Récupérer l'ID utilisateur depuis le localStorage
            const userId = localStorage.getItem('user_id'); // Vérification de l'existence de l'ID
            console.log("L'ID utilisateur récupéré est :", userId);
      
            if (!userId || isNaN(Number(userId))) {
              this.errorMessage = 'Utilisateur non authentifié. Veuillez vous reconnecter.';
              return;
            }
      
            // Préparer les données à envoyer au backend
            const formData = { 
              ...this.predForm.value, 
              user_id: Number(userId) // Convertir l'ID en entier
            };
      
            console.log('Données envoyées au backend :', formData);
      
            // Envoi de la requête POST au backend
            this.http.post<any>('http://localhost:8000/api/recommendation', formData).subscribe({
              next: (response) => {
                console.log('Réponse du serveur :', response);
      
                // Récupérer l'ID utilisateur depuis la réponse (si applicable)
                if (response.user_id) {
                  localStorage.setItem('user_id', response.user_id); // Mettre à jour le localStorage
                  console.log('ID utilisateur mis à jour dans le localStorage :', response.user_id);
                }
      
                this.result = response.resultat; // Stocker le résultat pour affichage
                this.errorMessage = null;
      
                // Rediriger vers la page de recommandation
                this.router.navigate(['/recommendation']);
              },
              error: (error) => {
                console.error('Erreur lors de la requête :', error);
                this.errorMessage = 'Une erreur est survenue lors de la prédiction.';
              }
            });
          } else {
            this.errorMessage = 'Veuillez remplir tous les champs correctement.';
          }
        }
    

}
