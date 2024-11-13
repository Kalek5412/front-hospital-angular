import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  public usuario:Usuario
  public menuItems:any[];
  

  constructor(private _sidebarService:SidebarService,private _usuarioService:AuthService){
    this.menuItems=_sidebarService.menu;
    this.usuario=_usuarioService.usuario;
  }

}
