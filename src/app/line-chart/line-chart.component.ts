import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent {
  constructor() {}

  ngOnInit(): void {
    this.createChart();
  }

  public lineChart: any;

  createChart() {
    this.lineChart = new Chart('lineChart', {
      type: 'line',
      data: {
        labels: ['jan', 'feb', 'mar', 'april', 'may', 'june', 'july', 'aug'],
        datasets: [
          {
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
          },
        ],
      },
    });
  }
}
