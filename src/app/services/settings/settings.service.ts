import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  ajustes: Ajustes = {

    temaUrl: 'assets/css/colors/default-dark.css',
    tema: 'default'

  };
  constructor(@Inject(DOCUMENT) private _document) { 

    this.cargarAjustes(); 

  }

  guardarAjustes(){
    // guardamos el objeto de ajustes pasandolos como string
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));

  }

  cargarAjustes(){

    if ( localStorage.getItem('ajustes') ){
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
      this.aplicarTema(this.ajustes.tema);
      console.log('cargando del local storage');
    }else{
      // si no hay tema se usa el tema por defecto∫
      this.aplicarTema(this.ajustes.tema);
      console.log('usando valores por defecto');
    }

  }


  aplicarTema( tema: string ){

    let url = `assets/css/colors/${ tema }.css`;
    // se cabia la ruta del link de css por la hoja de estilo con los temas
    this._document.getElementById('theme').setAttribute('href', url);

    // guardando el local el tema seleccionado
    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;

    this.guardarAjustes();
  }
}



interface Ajustes{
  temaUrl: string;
  tema: string;
}
