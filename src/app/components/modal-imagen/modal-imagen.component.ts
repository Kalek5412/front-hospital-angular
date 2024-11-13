import { Component } from '@angular/core';
import { FileUploadsService } from 'src/app/services/file-uploads.service';
import { ModalImageService } from 'src/app/services/modal-image.service';

@Component({
  selector: 'app-modal-imagen',
  templateUrl: './modal-imagen.component.html',
  styleUrls: ['./modal-imagen.component.css']
})
export class ModalImagenComponent {
  public imagenUp: File;
  public imgTemp: any = null;
 
  constructor(public modalIMGService:ModalImageService,public fileUploadService: FileUploadsService){}

  cerrarModal(){
    this.imgTemp=null;
    this.modalIMGService.cerrarModal();
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
    };
  }

}
