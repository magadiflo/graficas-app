import { Component, OnInit } from '@angular/core';
import { ChartDataset } from 'chart.js';

@Component({
  selector: 'app-barras-doble',
  templateUrl: './barras-doble.component.html',
  styles: [
  ]
})
export class BarrasDobleComponent implements OnInit {

  proveedoresLabels: string[] = ['2021', '2022', '2023', '2024', '2025'];
  productoData: ChartDataset<"bar", number[]>[] = [
    { data: [50, 100, 500, 300, 900], label: 'Carros', backgroundColor: 'blue' },
  ];

  consumidoresLabels: string[] = ['2021', '2022', '2023', '2024', '2025'];
  consumidorData: ChartDataset<"bar", number[]>[] = [
    { data: [50, 80, 30, 100, 50], label: 'Licor', backgroundColor: 'red' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
