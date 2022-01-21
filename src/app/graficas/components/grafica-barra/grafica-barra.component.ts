import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { ChartConfiguration, ChartData, ChartDataset, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };
  
  barChartType: ChartType = 'bar';

  @Input() labels: string[] = [];
  @Input() datasets: ChartDataset<"bar", number[]>[] = [];

  public barChartData!: ChartData<'bar'>;

  constructor() { }

  ngOnInit(): void {
    this.barChartData = {
      labels: this.labels,
      datasets: this.datasets,
    };
  }

}
