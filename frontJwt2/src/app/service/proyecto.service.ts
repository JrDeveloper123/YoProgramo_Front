import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../models/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {


  productoURL = 'https://springboot-backend-yoprogamo-kx79.onrender.com/proyect/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Proyecto[]> {
    return this.httpClient.get<Proyecto[]>(this.productoURL + 'list');
  }

  public detail(id: number): Observable<Proyecto> {
    return this.httpClient.get<Proyecto>(this.productoURL + `detail/${id}`);
  }

  

  public save(producto: Proyecto): Observable<any> {
    return this.httpClient.post<any>(this.productoURL + 'create', producto);
  }

  public update(id: number, producto: Proyecto): Observable<any> {
    return this.httpClient.put<any>(this.productoURL + `update/${id}`, producto);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.productoURL + `delete/${id}`);
  }
}