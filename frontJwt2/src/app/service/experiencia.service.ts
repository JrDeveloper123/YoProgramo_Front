import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../models/experiencia';

@Injectable({
  providedIn: 'root'
})


  export class ExperienciaService {

    URL = 'https://springboot-backend-yoprogamo-kx79.onrender.com/experience';
  
    constructor(private httpClient: HttpClient) { }
  
    public obtenerDatos(): Observable<Experiencia[]>{
      return this.httpClient.get<Experiencia[]>(this.URL+ "/list");
    }
  
    public detail(id:number): Observable<Experiencia>{
      return this.httpClient.get<Experiencia>(this.URL+ `/detail/${id}`);
    }
  
    public save(educacion:Experiencia): Observable<any>{
      return this.httpClient.post<any>(this.URL+ "/create", educacion);
    }
  
    public update(id: number, proyecto: Experiencia): Observable<any>{
      return this.httpClient.put<any>(this.URL+`/update/${id}`, proyecto);
    }
  
    public delete(id: number): Observable<any>{
      return this.httpClient.delete<any>(this.URL+`/delete/${id}`);
    }
  }
  