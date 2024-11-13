import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit{

  ngOnInit(){
    this.btnClass=`btn ${this.btnClass}`;
  }

  //@Input('valor')  prograso: number=12;
  @Input()  prograso: number=12;
  @Input()  btnClass: string='btn btn-primary';
  @Output() valorBar: EventEmitter<number>=new EventEmitter();

  cambiarValor(valor:number){

    if(this.prograso>=100 && valor>=0){
      this.valorBar.emit(100);
      return this.prograso=100;
    }
    if(this.prograso<=0 && valor<0){
      this.valorBar.emit(0);
      return this.prograso=0;
    }
    this.prograso=this.prograso+valor;
    return this.valorBar.emit(this.prograso);
    
  }

  onChange(nuevoValor:number){
  if(nuevoValor>=100){
    this.prograso=100;
  }else if(nuevoValor<=0){
    this.prograso=0;
  }else{
    this.prograso=nuevoValor
  }

    this.valorBar.emit(this.prograso);
  }

}
