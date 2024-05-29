import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartData } from 'chart.js';
import { MockDataService } from './../../services/mock-data.service';

@Component({
  selector: 'app-targets-visualization',
  templateUrl: './targets-visualization.component.html',
  styleUrls: ['./targets-visualization.component.scss']
})
export class TargetsVisualizationComponent implements OnInit {
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: string[] = ['Achieved', 'Remaining'];
  public pieChartData: ChartData<'pie', number[], string> = {
    labels: this.pieChartLabels,
    datasets: [
      {
        data: [0, 0],
      },
    ],
  };
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;

  signups: any;

  constructor(private mockDataService: MockDataService) { }

  ngOnInit(): void {
    this.mockDataService.getSignups().subscribe(data => {
      this.signups = data;
      this.updateChartData();
    });
  }

  updateChartData() {
    this.pieChartData.datasets[0].data = [
      this.signups.byProduct.analytics,
      1000 - this.signups.byProduct.analytics
    ];
  }
}
