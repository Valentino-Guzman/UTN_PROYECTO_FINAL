import { Injectable } from '@angular/core';
import { environment } from '../../environments/api'
import { HttpClient } from '@angular/common/http';
import { Login, LoginResponse } from '../interfaces/login';
import { Register, RegisterResponse } from '../interfaces/registro';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class authService {

  private apiUrl = environment.apiURL

  private nombreOperario = new BehaviorSubject<string>('');
  currentNombreOperario = this.nombreOperario.asObservable();

  constructor(private http: HttpClient) { }

  login(data:Login) {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, data).pipe(tap(response => {
      this.nombreOperario.next(response.user.name);
    }));
  }

  register(data:Register) {
    return this.http.post<RegisterResponse>(`${this.apiUrl}/register`, data)
  }
  
}
