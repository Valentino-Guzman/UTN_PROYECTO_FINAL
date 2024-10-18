import { Injectable } from '@angular/core';
import { environment } from '../../environments/api'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Operario } from '../interfaces/operario';

@Injectable({
  providedIn: 'root'
})
export class OperarioService {

  private apiUrl = environment.apiURL

  constructor(private http: HttpClient) { }

  obtenerOperarios(): Observable<Operario[]> {
    return this.http.get<Operario[]>(`${this.apiUrl}/usuarios`)
  }
}
