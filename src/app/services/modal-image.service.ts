import { EventEmitter, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
const base_url=environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class ModalImageService {
  private _ocultarModal:boolean=true;
  public tipo: 'usuarios'|'doctor'|'hospital';
  public id: string;
  public img: string;
  public nuevaImagen: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  get ocultarModal(){
    return this._ocultarModal;
  }

/*   abrirModal(tipo:'usuarios'|'doctor'|'hospital',    id:string,     img:string='no-image'){

    this._ocultarModal=false;
    this.tipo=tipo;
    this.id=id;
    
    if(img.includes('https')){
      this.img=img;
    }else{
      this.img= `${ base_url }/uploads/${ tipo }/${ img }`;
    }
  } */

  cerrarModal(){
    this._ocultarModal=true;
  }

 
}
