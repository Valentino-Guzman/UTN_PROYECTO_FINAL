import { Injectable } from '@angular/core';
import { environment } from '../../environments/api'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tarea } from '../interfaces/tarea';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  private apiUrl = environment.apiURL

  constructor(private http: HttpClient) { }

  obtenerOrden(data:Tarea): Observable<Tarea>  {
    return this.http.get<Tarea>(`${this.apiUrl}/tarea`)
  }
  
  crearOrden(data: Tarea) {
    return this.http.post<Tarea>(`${this.apiUrl}/tarea`, data);
  }
}