import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router, RouterEvent } from '@angular/router';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnDestroy {
  public titulo !: string;
  public tituloSubs$:Subscription;
 

  constructor(private router:Router){
    this.tituloSubs$=this.getArgumentosRuta().subscribe( ({titulo})=> {
                    this.titulo=titulo;
                    document.title= `adminPro-${titulo}`;
                  });      
  }
  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe();
  }

  getArgumentosRuta(){
    return this.router.events
    .pipe(
        filter((event): event is ActivationEnd=>event instanceof ActivationEnd),
        filter((event:ActivationEnd)=>event.snapshot.firstChild===null),
        map((event:ActivationEnd)=>event.snapshot.data),
      )
  }
}
