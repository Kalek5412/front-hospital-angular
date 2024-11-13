import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';
import { FileUploadsService } from 'src/app/services/file-uploads.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit {
  public perfilForm!: FormGroup;
  public usuario: Usuario;
  public imagenUp: File;
  public imgTemp: any = null;

  constructor(
    private fb: FormBuilder,
    private _usuarioService: AuthService,
    private _fileUp: FileUploadsService
  ) {
    this.usuario = _usuarioService.usuario;
  }

  ngOnInit() {
    this.perfilForm = this.fb.group({
      nombre: [this.usuario.nombre, Validators.required],
      email: [this.usuario.email, [Validators.required, Validators.email]],
    });
  }
  actualizarPerfil() {
    console.log(this.perfilForm.value);
    this._usuarioService.actualizarPerfil(this.perfilForm.value).subscribe(
      () => {
        const { nombre, email } = this.perfilForm.value;
        this.usuario.nombre = nombre;
        this.usuario.email = email;
        Swal.fire({
          title: 'Guardado!',
          text: 'Cambio exitoso!',
          icon: 'success',
        });
      },
      (err) => {
        Swal.fire({
          title: 'Error!',
          text: err.error.msg,
          icon: 'error',
        });
      }
    );
  }

  cambiarImagen(file: File) {
    this.imagenUp = file;
    if (!file) {
      return (this.imgTemp = null);
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      this.imgTemp = reader.result;
      //console.log(reader.result);
    };
  }

  subirImagen() {
    this._fileUp
      .actualizarFoto(this.imagenUp, 'usuario', this.usuario.uid)
      .then((img) => {
        this.usuario.img = img;
        Swal.fire({
          title: 'Guardado!',
          text: 'Cambio exitoso!',
          icon: 'success',
        });
      });
  }
}
