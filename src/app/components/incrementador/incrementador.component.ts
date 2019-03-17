import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef;

  @Input('nombre') leyenda: string = 'Leyenda';
  @Input() progreso: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onChange( event ){
    
    if ( event >= 100) {
      this.progreso = 100;
    }else if ( event >= 100) {
      this.progreso = 0;
    }else{
      this.progreso = event;
    }
    
    console.log(event);
    this.cambioValor.emit( this.progreso );
    this.txtProgress.nativeElement.focus();
  }

  cambiarValor(valor: number){

    if (this.progreso >= 100 && valor > 0){
      this.progreso = 100;
      return;
    }

    if (this.progreso <= 0 && valor < 0){
      this.progreso = 0;
      return;
    }

    this.progreso = this.progreso + valor;
    this.cambioValor.emit( this.progreso );
  }

}
