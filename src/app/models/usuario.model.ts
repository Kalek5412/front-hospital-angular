import { environment } from "src/environments/environment.development";
const base_utl=environment.base_url;

export class Usuario{
    constructor(
        public nombre:string,
        public email:string,
        public password?:string,
        public role?:string,
        public img?:string,
        public uid?:string,
        public google?:boolean,
    ){}

  get imagenURL(){
    if(!this.img){
        return `${base_utl}/uploads/usuario/no-image`;
    }else if(this.img.includes('https')){
        return this.img;
    }else if(this.img){
      return `${base_utl}/uploads/usuario/${this.img}`;
    }else{
      return `${base_utl}/uploads/usuario/no-image`;
    }
  }
}