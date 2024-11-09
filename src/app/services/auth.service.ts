import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';
const httpOptions={
  headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  
}
