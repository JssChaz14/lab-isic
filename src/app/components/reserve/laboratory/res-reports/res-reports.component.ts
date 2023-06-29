import { ChartDataset, ChartOptions, Chart } from 'chart.js';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-res-reports',
  templateUrl: './res-reports.component.html',
  styleUrls: ['./res-reports.component.scss']
})
export class ResReportsComponent implements OnInit   {


  constructor() { }

  ngOnInit() {
    const chartElement = document.getElementById('myChart');
    if (chartElement !== null) {
      // Llamar a la función con el elemento HTML
      this.miFuncion(chartElement);
    } else {
      console.error('Elemento HTML no encontrado');
    }
  }
  
  miFuncion( a: any) {
    console.log('err0r')
  }
}
