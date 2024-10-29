import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/api';
import { Ubicacion } from '../interfaces/ubicacion';

@Injectable({
  providedIn: 'root'
})
export class UbicacionService {

  private apiUrl = environment.apiURL

  constructor(private http: HttpClient) { }

  obtenerUbicacion(): Observable<Ubicacion[]> {
    return this.http.get<Ubicacion[]>(`${this.apiUrl}/ubicacion`)
  }

  crearUbicacion(data: Ubicacion): Observable<Ubicacion> {
    return this.http.get<Ubicacion>(`${this.apiUrl}/ubicacion`)
  }
}
