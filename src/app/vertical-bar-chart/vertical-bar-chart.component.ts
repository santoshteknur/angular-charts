import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-vertical-bar-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vertical-bar-chart.component.html',
  styleUrls: ['./vertical-bar-chart.component.scss'],
})
export class VerticalBarChartComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.createChart();
  }

  verticalBarChart: any;

  createChart() {
    this.verticalBarChart = new Chart('verticalBarChart', {
      type: 'bar',
      data: {
        labels: ['a', 'b'],
        datasets: [
          {
            label: 'Dataset 1',
            data: [20, 40],
          },
          {
            label: 'Dataset 2',
            data: [30, 10],
          },
        ],
      },
    });
  }
}
