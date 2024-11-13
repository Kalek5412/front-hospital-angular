import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public imgURL='';
  constructor(private _usuarioService:AuthService,private router:Router){
    this.imgURL=_usuarioService.usuario.imagenURL;
  }

  logout(){
    this._usuarioService.logout();
    this.router.navigateByUrl("/login");
  }
}
