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
    this.graficasService.getUsuariosRedesSociales()
      .subscribe(data => {
        const labels = Object.keys(data);
        const values = Object.values(data);

        this.doughnutChartLabels = labels;
        this.datasets.push({ data: values });

        // console.log(this.doughnutChartLabels);
        // console.log(this.datasets);
        this.doughnutChartData = {
          labels: this.doughnutChartLabels,
          datasets: this.datasets,
        }
      });
  }

}
