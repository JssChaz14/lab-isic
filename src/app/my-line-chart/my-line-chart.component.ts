import { Component } from '@angular/core';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'app-my-line-chart',
  templateUrl: './my-line-chart.component.html',
  styleUrls: ['./my-line-chart.component.scss']
})
export class MyLineChartComponent {

  
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  public pieChartLabels = [ 
    [ 'Lab 1' ], [ 'Lab 2' ], ['Lab 3' ], ['Lab 4' ], ['Lab 5' ]
  ];
  public pieChartDatasets = [ {
    data: [ 300, 500, 100, 200, 100 ]
  } ];
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor() {
  }
}
