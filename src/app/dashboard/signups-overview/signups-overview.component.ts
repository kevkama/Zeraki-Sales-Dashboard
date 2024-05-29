import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartData } from 'chart.js';
import { MockDataService } from './../../services/mock-data.service';

@Component({
  selector: 'app-signups-overview',
  templateUrl: './signups-overview.component.html',
  styleUrls: ['./signups-overview.component.scss']
})
export class SignupsOverviewComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: string[] = ['Primary', 'Secondary', 'IGCSE'];
  public barChartData: ChartData<'bar'> = {
    labels: this.barChartLabels,
    datasets: [
      { data: [], label: 'Zeraki Analytics' },
      { data: [], label: 'Zeraki Finance' },
      { data: [], label: 'Zeraki Timetable' }
    ],
  };
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  signups: any;

  constructor(private mockDataService: MockDataService) { }

  ngOnInit(): void {
    this.mockDataService.getSignups().subscribe(data => {
      this.signups = data;
      this.updateChartData();
    });
  }

  updateChartData() {
    this.barChartData.datasets[0].data = [
      this.signups.bySchoolType.primary.analytics,
      this.signups.bySchoolType.secondary.analytics,
      this.signups.bySchoolType.igcse.analytics
    ];
    this.barChartData.datasets[1].data = [
      this.signups.bySchoolType.primary.finance,
      this.signups.bySchoolType.secondary.finance,
      this.signups.bySchoolType.igcse.finance
    ];
    this.barChartData.datasets[2].data = [
      this.signups.bySchoolType.primary.timetable,
      this.signups.bySchoolType.secondary.timetable,
      this.signups.bySchoolType.igcse.timetable
    ];
  }
}
