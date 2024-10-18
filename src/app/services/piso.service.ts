import { Injectable } from '@angular/core';
import { environment } from '../../environments/api'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Piso } from '../interfaces/piso';

@Injectable({
  providedIn: 'root'
})
export class PisoService {

  private apiUrl = environment.apiURL

  constructor(private http: HttpClient) { }

  obtenerPiso(): Observable<Piso[]>  {
    return this.http.get<Piso[]>(`${this.apiUrl}/piso`)
  }
  
  crearPiso(data: Piso) {
    return this.http.post<Piso>(`${this.apiUrl}/piso`, data);
  }
}

