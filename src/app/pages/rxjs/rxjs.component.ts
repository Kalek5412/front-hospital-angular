import { Component, OnDestroy } from '@angular/core';
import { filter, interval, map, Observable, retry, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnDestroy{

  public intervalSubs: Subscription;

  constructor() {


/*     this.retornaObservable().pipe(
      retry(2)
    ).subscribe(
      valor=>console.log('subs:',valor),
      error=>console.warn('error:',error),
      ()=>console.info('hasta aquisoldado')
    ); */

    this.intervalSubs=this.retornaIntervalo().subscribe(console.log)
  }
  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

  retornaIntervalo():Observable<number>{
   return interval(1000).pipe(
    map(valor=>valor+1),
    filter(valor=>(valor%2===0)? true:false),
    take(10),
  );
   
  }

  retornaObservable(): Observable<number>{
    let i=-1
   
    return new Observable<number>(observer=>{
  
  
      const intervalo=setInterval(()=>{
        i++
        observer.next(i);
        if(i===4){
          clearInterval(intervalo);
          observer.complete();
        }
        if(i===2){
   
          observer.error('i llego al valor 2');
        }
      },1000)
    });

  }




}
