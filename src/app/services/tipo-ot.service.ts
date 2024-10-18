import { Injectable } from '@angular/core';
import { Tipo_ot } from '../interfaces/tipo_ot';
import { environment } from '../../environments/api';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TipoOtService {

  private apiUrl = environment.apiURL

  constructor(private http: HttpClient) { }

  obtenerTipo_Orden(): Observable<Tipo_ot[]>  {
    return this.http.get<Tipo_ot[]>(`${this.apiUrl}/tipo`)
  }
}
