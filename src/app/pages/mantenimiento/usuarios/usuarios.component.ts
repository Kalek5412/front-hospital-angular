import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';
import { BusquedasService } from 'src/app/services/busquedas.service';
import { ModalImageService } from 'src/app/services/modal-image.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  public totalUsuarios: number=0;
  public usuarios:Usuario[]=[];
  public usuariosTemp:Usuario[]=[];
  public desde: number=0;
  public cargando: boolean=true;
  public mailUser: string = this._usuarioService.usuario.email;

  constructor(private _usuarioService:AuthService,
              private _busquedaService:BusquedasService,
              private _modalImageService:ModalImageService
  ){}
  

  ngOnInit(): void {
    this.CargarUsuarios();
  }

  CargarUsuarios(){
    this.cargando=true;
    this._usuarioService.cargarUsuarios(this.desde).subscribe(({total,usuarios})=>{
      this.totalUsuarios=total;
      this.usuarios=usuarios;
      this.usuariosTemp=usuarios;
      this.cargando=false;
    })
  }

  cambiarPagina(valor:number){
    this.desde += valor;
    if(this.desde < 0 ){
      this.desde=0;
    }else if(this.desde >= this.totalUsuarios){
      this.desde -= valor;
    }
    this.CargarUsuarios();
  }

  buscar(termino:string){
    if(termino.length===0){
      return this.usuarios=this.usuariosTemp;
    }
    this._busquedaService.buscar('usuarios',termino).subscribe(
      (resp:Usuario[])=>{this.usuarios=resp 
      }     
    );
    return true;
  }

  eliminarUsuario(usuario:Usuario){

    Swal.fire({
      title: "borrar usirio?",
      text: `estassseguro ${usuario.nombre}!`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this._usuarioService.eliminarUsuario(usuario).subscribe(resp=>{
          this.CargarUsuarios();
          Swal.fire(
            'Usuario borrado',
            `${usuario.nombre} fue eliminado correctamente`,
            'success'
          )
        });
      }
    });
  }

  cambiarRole(usuario:Usuario){
    this._usuarioService.guardarUsuario(usuario).subscribe(r=>{
      console.log(r);
    })
  }

/*   abrirModal(usuario:Usuario){
    console.log(usuario);
    this._modalImageService.abrirModal();
  } */
}
