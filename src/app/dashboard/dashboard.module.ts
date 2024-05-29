import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopCardMetricsComponent } from './top-card-metrics/top-card-metrics.component';
import { TargetsVisualizationComponent } from './targets-visualization/targets-visualization.component';
import { SignupsOverviewComponent } from './signups-overview/signups-overview.component';
import { UpcomingInvoicesComponent } from './upcoming-invoices/upcoming-invoices.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BaseChartDirective } from 'ng2-charts';



@NgModule({
  declarations: [
    TopCardMetricsComponent,
    TargetsVisualizationComponent,
    SignupsOverviewComponent,
    UpcomingInvoicesComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    BaseChartDirective
  ]
})
export class DashboardModule { }
