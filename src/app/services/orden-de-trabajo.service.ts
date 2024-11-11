import { Injectable } from '@angular/core';
import { environment } from '../../environments/api'
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Orden, OrdenResponse, OrdenStatus, OrdenTiempo} from '../interfaces/orden';


@Injectable({
  providedIn: 'root'
})
export class OrdenDeTrabajoService {

  private apiUrl = environment.apiURL

  constructor(private http: HttpClient) { }

  obtenerOrden(): Observable<Orden[]>  {
    return this.http.get<Orden[]>(`${this.apiUrl}/ordenes`)
  }

  obtenerOrdenId(id:number): Observable<Orden>  {
    return this.http.get<Orden>(`${this.apiUrl}/ordenes/${id}`)
  }
  
  crearOrden(data: Orden) {
    return this.http.post<Orden>(`${this.apiUrl}/ordenes`, data);
  }

  obtenerEstadoOrdenes(): Observable<OrdenResponse> {
    return this.http.get<OrdenResponse>(`${this.apiUrl}/ordenesCantidades`);
  }

  modificarEstadoOrdenes(id: number, estado: string, tiempoTranscurrido?: number) {
    return this.http.put<OrdenStatus>(`${this.apiUrl}/ordenes/${id}/estado`, {estado});
  }

  obtenerOrdenOperario(id:number): Observable<Orden[]> {
    return this.http.get<Orden[]>(`${this.apiUrl}/ordenes/operario/${id}`)
  }

}
