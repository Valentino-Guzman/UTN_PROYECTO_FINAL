import { Injectable } from '@angular/core';
import { environment } from '../../environments/api'
import { HttpClient } from '@angular/common/http';
import { Login } from '../interfaces/login';
import { Register } from '../interfaces/registro';

@Injectable({
  providedIn: 'root'
})
export class authService {

  private apiUrl = environment.apiURL

  constructor(private http: HttpClient) { }

  login(data:Login) {
    return this.http.post<Login>(`${this.apiUrl}/login`, data);
  }

  register(data:Register) {
    return this.http.post<Register>(`${this.apiUrl}/register`, data)
  }
}
