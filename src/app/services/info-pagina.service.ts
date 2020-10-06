import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InforPagina } from '../interfaces/info-pagina.interface';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  info: InforPagina = {};
  cargada = false;
  equipo:any [] = [];

  constructor(private http: HttpClient) { 

   this.cargarInfo();
   this.CargarEquipo();
  }

  private cargarInfo(){
    this.http.get('assets/data/data-pagina.json')
    .subscribe((resp: InforPagina) =>{
      this.cargada = true;
      this.info = resp;
    })
  }
  private CargarEquipo(){
    this.http.get('https://angular-html-2dd01.firebaseio.com/equipo.json')
    .subscribe((resp: Producto[]) =>{
      this.equipo = resp;
    })
  }
}
