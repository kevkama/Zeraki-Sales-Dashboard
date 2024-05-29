import { Component, OnInit } from '@angular/core';
import { MockDataService } from './../../services/mock-data.service';

@Component({
  selector: 'app-top-card-metrics',
  templateUrl: './top-card-metrics.component.html',
  styleUrls: ['./top-card-metrics.component.scss']
})
export class TopCardMetricsComponent implements OnInit {
  collection: any;
  signups: any;
  totalRevenue: any;
  bouncedCheques: any;

  constructor(private mockDataService: MockDataService) { }

  ngOnInit(): void {
    this.mockDataService.getCollections().subscribe(data => this.collection = data);
    this.mockDataService.getSignups().subscribe(data => this.signups = data);
    this.mockDataService.getTotalRevenue().subscribe(data => this.totalRevenue = data);
    this.mockDataService.getBouncedCheques().subscribe(data => this.bouncedCheques = data);
  }
}
