import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _userService:AuthService,
            private router:Router
  ){

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){
    return  this._userService.validarToken()
    .pipe(
      tap(isAutenticado=>{
        if(!isAutenticado){
          this.router.navigateByUrl('login');
        }
      })
    )
  }
  
}
