import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Usuario } from '../models/usuario.model';
const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class BusquedasService {

  constructor(private http:HttpClient) { }

  get token():string{
    return localStorage.getItem('token') || '';
  }

  get headers(){
    return {headers:{
      'x-token':this.token
    }}
  }

  private transformarUsuarios(resultados:any[]):Usuario[]{
    return resultados.map(
      user=>new Usuario(user.nombre,user.email,'',user.role,user.img,user.uid,user.google)
    );
  }

  buscar(tipo:'usuarios'|'doctor'|'hospital',termino:string){
    const url=`${base_url}/busquedas/${tipo}/${termino}`;
    return this.http.get<any[]>(url,this.headers).pipe(
      map((resp:any)=>{
        switch(tipo){
          case 'usuarios':
            return this.transformarUsuarios(resp.resultados);
         
          default:
            return [];  
        }
      })
    );
  }
}
