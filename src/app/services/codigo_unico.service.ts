import { Injectable } from '@angular/core';
import { environment } from '../../environments/api'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Codigo_unico } from '../interfaces/codigo_unico';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  private apiUrl = environment.apiURL

  constructor(private http: HttpClient) { }

  obtenerOrden(data:Codigo_unico): Observable<Codigo_unico>  {
    return this.http.get<Codigo_unico>(`${this.apiUrl}/codigo`)
  }
  
  crearOrden(data: Codigo_unico) {
    return this.http.post<Codigo_unico>(`${this.apiUrl}/codigo`, data);
  }
}