import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrl: './recommendation.component.css'
})
export class RecommendationComponent {

  recommendationDetail: any = null;
  errorMessage: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const userId = localStorage.getItem('user_id');
    if (!userId) {
      this.errorMessage = 'Utilisateur non authentifié.';
      return;
    }

    this.http.get(`http://localhost:8000/api/recommendation-detail?user_id=${userId}`).subscribe({
      next: (response) => {
        this.recommendationDetail = response;
        this.errorMessage = null;
      },
      error: (error) => {
        this.errorMessage = error.error?.error || 'Une erreur est survenue.';
        console.error(error);
      },
    });
  }
}
