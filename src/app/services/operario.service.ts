import { Injectable } from '@angular/core';
import { environment } from '../../environments/api'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { operario } from '../interfaces/operario';

@Injectable({
  providedIn: 'root'
})
export class OperarioService {

  private apiUrl = environment.apiURL

  constructor(private http: HttpClient) { }

  obtenerOperarios(data: operario[]): Observable<operario[]> {
    return this.http.get<operario[]>(`${this.apiUrl}/usuarios`)
  }
}
