import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraficaComponent } from './grafica/grafica.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { PerfilComponent } from './perfil/perfil.component';
import { AuthGuard } from '../guards/auth.guard';
import { UsuariosComponent } from './mantenimiento/usuarios/usuarios.component';



const routes: Routes = [
    {
        path:'dashboard',
        component:PagesComponent,
        canActivate:[AuthGuard],
        children:[
          {path:'',component:DashboardComponent, data:{titulo:'dashboard'}},
          {path:'grafica',component:GraficaComponent,data:{titulo:'grafica'}},
          {path:'progress',component:ProgressComponent,data:{titulo:'progress'}},
          {path:'account',component:AccountSettingsComponent,data:{titulo:'account'}},
          {path:'promesas',component:PromesasComponent,data:{titulo:'promesas'}},
          {path:'rxjs',component:RxjsComponent,data:{titulo:'rxjs'}},
          {path:'perfil',component:PerfilComponent,data:{titulo:'perfil'}},
          {path:'usuarios',component:UsuariosComponent,data:{titulo:'usuarios'}},
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
