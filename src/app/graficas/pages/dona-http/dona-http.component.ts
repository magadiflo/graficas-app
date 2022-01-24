import { Component, OnInit } from '@angular/core';

import { ChartData, ChartType } from 'chart.js';

import { GraficasService } from '../../services/graficas.service';

interface Data {
  data: number[],
}

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  public doughnutChartLabels: string[] = [];
  public datasets: Data[] = [];
  public doughnutChartData!: ChartData<'doughnut'>;
  public doughnutChartType: ChartType = 'doughnut';

  constructor(private graficasService: GraficasService) { }

  ngOnInit(): void {
    this.graficasService.getUsuariosRedesSocialesData()
      .subscribe(({ labels, data }) => {
        this.datasets.push(data);
        this.doughnutChartData = {
          labels: labels,
          datasets: this.datasets,
        }
      });
  }

}
