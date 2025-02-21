import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-line-and-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './line-and-bar.component.html',
  styleUrls: ['./line-and-bar.component.scss'],
})
export class LineAndBarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.createChart();
  }

  public lineAndBarChart: any;

  createChart() {
    this.lineAndBarChart = new Chart('lineAndBarChart', {
      type: 'scatter',
      data: {
        labels: ['January', 'February', 'March', 'April'],
        datasets: [
          {
            type: 'bar',
            label: 'Bar Dataset',
            data: [10, 20, 30, 40],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
          },
          {
            type: 'line',
            label: 'Line Dataset',
            data: [12, 20, 40, 50],
            fill: false,
            borderColor: 'rgb(54, 162, 235)',
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}
