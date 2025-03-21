import { Injectable } from '@angular/core';
import { environment } from '../../environments/api'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sector } from '../interfaces/sector';

@Injectable({
  providedIn: 'root'
})
export class SectorService {

  private apiUrl = environment.apiURL

  constructor(private http: HttpClient) { }

  obtenerSector(): Observable<Sector[]>  {
    return this.http.get<Sector[]>(`${this.apiUrl}/sector`)
  }
  
  crearSector(data: Sector) {
    return this.http.post<Sector>(`${this.apiUrl}/sector`, data);
  }
}



