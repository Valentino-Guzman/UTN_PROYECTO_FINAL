import { Injectable } from '@angular/core';
import { environment } from '../../environments/api'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Orden } from '../interfaces/orden';


@Injectable({
  providedIn: 'root'
})
export class OrdenDeTrabajoService {

  private apiUrl = environment.apiURL

  constructor(private http: HttpClient) { }

  obtenerOrden(): Observable<Orden[]>  {
    return this.http.get<Orden[]>(`${this.apiUrl}/ordenes`)
  }
  
  crearOrden(data: Orden) {
    return this.http.post<Orden>(`${this.apiUrl}/ordenes`, data);
  }
}
