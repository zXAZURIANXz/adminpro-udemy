import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafica',
  templateUrl: './graficaDona.component.html',
  styleUrls: ['./graficaDona.component.css']
})
export class GraficaComponent implements OnInit {

  // imput variables que pueden venir de afuera
  @Input() leyenda: string = 'Leyenda Para grafica';

    // Doughnut
  @Input()  doughnutChartLabels: string[] = [];
  @Input()  doughnutChartData: number[] = [];
  @Input()  doughnutChartType: string = '';

  constructor() { }
 
  ngOnInit() {
  }

}
