import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import Chart from 'chart.js/auto';
import { DataService } from '../services/data.service'; // Import the DataService

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements OnInit {
  constructor(private dataService: DataService) {} // Inject the DataService

  ngOnInit(): void {
    // Call the service to fetch data
    this.dataService.getData().subscribe((data) => {
      this.data = data.slice(0, 10); // Use the first 10 items for the chart
      this.createChart();
    });
  }

  public barChart: any;
  data: any[] = [];

  createChart() {
    // Create the chart using the fetched data
    this.barChart = new Chart('barChart', {
      type: 'bar',
      data: {
        labels: this.data.map((row) => `Post ${row.id}`), // Post id as label
        datasets: [
          {
            label: 'Post Length', // Dataset label
            data: this.data.map((row) => row.body.length), // Length of each post body
            backgroundColor: '#4e73df', // Color of the bars
            borderColor: '#4e73df',
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true, // Start y-axis from zero
          },
        },
      },
    });
  }
}
