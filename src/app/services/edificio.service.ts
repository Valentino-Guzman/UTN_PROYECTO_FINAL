import { Injectable } from '@angular/core';
import { environment } from '../../environments/api'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Edificio } from '../interfaces/edificio';

@Injectable({
  providedIn: 'root'
})
export class EdificioService {

  private apiUrl = environment.apiURL

  constructor(private http: HttpClient) { }

  obtenerOrden(data:Edificio): Observable<Edificio>  {
    return this.http.get<Edificio>(`${this.apiUrl}/edificio`)
  }
  
  crearOrden(data: Edificio) {
    return this.http.post<Edificio>(`${this.apiUrl}/edificio`, data);
  }
}