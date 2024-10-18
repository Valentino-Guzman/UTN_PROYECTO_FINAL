import { Injectable } from '@angular/core';
import { environment } from '../../environments/api'
import { HttpClient } from '@angular/common/http';
import { Login, LoginResponse } from '../interfaces/login';
import { Register, RegisterResponse } from '../interfaces/registro';

@Injectable({
  providedIn: 'root'
})
export class authService {

  private apiUrl = environment.apiURL

  constructor(private http: HttpClient) { }

  login(data:Login) {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, data);
  }

  register(data:Register) {
    return this.http.post<RegisterResponse>(`${this.apiUrl}/register`, data)
  }
}
