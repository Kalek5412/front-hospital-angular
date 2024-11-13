import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {
  barra1:number=25;
  barra2:number=30;

  get getBarra1(){
    return `${this.barra1}%`
  }
  get getBarra2(){
    return `${this.barra2}%`
  }

 
}
