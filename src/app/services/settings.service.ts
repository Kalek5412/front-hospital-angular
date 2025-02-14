import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private linkTheme= document.querySelector('#theme');

  constructor() { 
    const urlTheme = localStorage.getItem('theme') || "./assets/css/colors/default-dark.css";
    this.linkTheme!.setAttribute('href',urlTheme);
  }

  changeTheme(theme:string){
    const urlTheme=`./assets/css/colors/${theme}.css`;
    this.linkTheme!.setAttribute('href',urlTheme);
    localStorage.setItem('theme',urlTheme);
    this.checkCurrentTheme();
  }

  checkCurrentTheme(){
    const links=document.querySelectorAll('.selector');
    links.forEach(elem=>{
      elem.classList.remove('working');
      const btnTheme=elem.getAttribute('data-theme');
      const btnThemeUrl=`./assets/css/colors/${btnTheme}.css`;
      const currentTheme=this.linkTheme!.getAttribute('href');
      if(btnThemeUrl===currentTheme){
        elem.classList.add('working')
      }

    });
  }
}
