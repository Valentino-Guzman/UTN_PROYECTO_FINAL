import { Injectable } from '@angular/core';
import { environment } from '../../environments/api'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Activo } from '../interfaces/activo';
import { activo_desc } from '../interfaces/activo_tarea_descrip';

@Injectable({
  providedIn: 'root'
})
export class ActivoService {

  private apiUrl = environment.apiURL

  constructor(private http: HttpClient) { }

  obtenerActivo(): Observable<activo_desc[]>  {
    return this.http.get<activo_desc[]>(`${this.apiUrl}/activotarea`)
  }

  obtenerActivos(): Observable<Activo[]> {
    return this.http.get<Activo[]>(`${this.apiUrl}/activo`)
  }

  obtenerActivoPorId(id: number): Observable<activo_desc[]> {
    return this.http.get<activo_desc[]>(`${this.apiUrl}/activo/${id}`);
}
  
  crearActivo(data: Activo) {
    return this.http.post<Activo>(`${this.apiUrl}/activo`, data);
  }
}