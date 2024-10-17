import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/api';
import { ubicacion } from '../interfaces/ubicacion';

@Injectable({
  providedIn: 'root'
})
export class UbicacionService {

  private apiUrl = environment.apiURL

  constructor(private http: HttpClient) { }

  obtenerUbicacion(ubicacionData: ubicacion[]): Observable<ubicacion[]> {
    return this.http.get<ubicacion[]>(`${this.apiUrl}/ubicacion`)
  }
}
