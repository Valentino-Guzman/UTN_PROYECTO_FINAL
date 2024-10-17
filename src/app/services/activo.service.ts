import { Injectable } from '@angular/core';
import { environment } from '../../environments/api'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Activo} from '../interfaces/activo';

@Injectable({
  providedIn: 'root'
})
export class ActivoService {

  private apiUrl = environment.apiURL

  constructor(private http: HttpClient) { }

  obtenerOrden(data:Activo): Observable<Activo>  {
    return this.http.get<Activo>(`${this.apiUrl}/activo`)
  }
  
  crearOrden(data: Activo) {
    return this.http.post<Activo>(`${this.apiUrl}/activo`, data);
  }
}