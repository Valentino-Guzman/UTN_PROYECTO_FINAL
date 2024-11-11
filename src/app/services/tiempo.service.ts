import { Injectable } from '@angular/core';
import { environment } from '../../environments/api';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TiempoService {

  private apiUrl = environment.apiURL 

  constructor(private http: HttpClient) {}

  actualizarTiempoTranscurrido(ordenId: number, tiempoTranscurrido: number) {
    return this.http.put(`${this.apiUrl}/${ordenId}`, { tiempo_transcurrido: tiempoTranscurrido });
  }

}
