import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent implements OnInit {
  constructor() {
    // Chart.register(ChartDataLabels);
  }

  ngOnInit(): void {
    this.createChart();
    this.createChart0();
  }

  public chart: any;
  public pieChart: any;

  data = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
        ],
        hoverOffset: 4,
      },
    ],
  };
  data0 = {
    labels: ['error', 'warning', 'normal'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [24, 9, 6],
        backgroundColor: ['#ff0000', '#ffbb1a', '#00ab00'],
        hoverOffset: 4,
      },
    ],
  };

  createChart() {
    this.chart = new Chart('MyChart', {
      type: 'pie',
      data: this.data,
    });
  }
  createChart0() {
    this.pieChart = new Chart('pieChart', {
      type: 'pie',
      data: this.data0,
      options: {
      },
    });
  }
}
