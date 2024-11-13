import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {


  menu: any[] = [
    {
      titulo: 'dashboard!!',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'main', url: '/' },
        { titulo: 'progresbar', url: 'progress' },
        { titulo: 'grafica', url: 'grafica' },
        { titulo: 'promesas', url: 'promesas' },
     
        { titulo: 'rxjs', url: 'rxjs' },
      ],
    },
    {
      titulo: 'Mantenimientos!!',
      icono: 'mdi mdi-folder-lock-open',
      submenu: [
        { titulo: 'Usuario', url: 'usuarios' },
        { titulo: 'Hospital', url: 'hospitales' },
        { titulo: 'Doctor', url: 'doctores' },
      ],
    },
  ];
  constructor() {}
}
