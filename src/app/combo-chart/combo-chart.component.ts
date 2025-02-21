import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-combo-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './combo-chart.component.html',
  styleUrls: ['./combo-chart.component.scss'],
})
export class ComboChartComponent {
  public comboChart: any;

  constructor() {}

  ngOnInit(): void {
    this.createChart();
  }
  createChart() {
    this.comboChart = new Chart('comboChart', {
      type: 'scatter',
      data: {
        labels: ['January', 'February', 'March', 'April'],
        datasets: [
          {
            type: 'bar',
            label: 'Bar Dataset 1',
            yAxisID: '1',
            data: [10, 20, 30, 40],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
          },
          {
            type: 'bar',
            label: 'Bar Dataset 2',
            yAxisID: '1',
            data: [5, 29, 37, 10],
            borderColor: 'rgb(132, 99, 255)',
            backgroundColor: 'rgba(132, 99, 255, 0.2)',
          },
          {
            type: 'line',
            label: 'Line Dataset',
            yAxisID: '2',
            data: [1000, 1750, 4000, 3550],
            fill: false,
            borderColor: 'rgb(54, 162, 255)',
            backgroundColor: 'rgb(54, 162, 255,0.2)',
          },
        ],
      },
      options: {
        scales: {
          '1': {
            type: 'linear',
            position: 'left',
            max: 50,
          },
          '2': {
            type: 'linear',
            position: 'right',
            max: 4500,
          },
        },
      },
    });
  }
}
