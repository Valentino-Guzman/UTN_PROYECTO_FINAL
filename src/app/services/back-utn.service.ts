import { Injectable } from '@angular/core';
import { environment } from '../../environments/api'
import { HttpClient } from '@angular/common/http';
import { Ilogin, ILoginResponse } from '../interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class BackUtnService {

  private apiUrl = environment.apiURL

  constructor(private http: HttpClient) { }

  login(data:Ilogin) {
    return this.http.post<ILoginResponse>(`${this.apiUrl}/login`, data);
  }
}
