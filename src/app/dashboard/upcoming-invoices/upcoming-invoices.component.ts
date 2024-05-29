import { Component, OnInit } from '@angular/core';
import { MockDataService } from './../../services/mock-data.service';

@Component({
  selector: 'app-upcoming-invoices',
  templateUrl: './upcoming-invoices.component.html',
  styleUrls: ['./upcoming-invoices.component.scss']
})
export class UpcomingInvoicesComponent implements OnInit {
  upcomingInvoices: any[] = [];
  selectedInvoice: any;
  paymentAmount!: number | null;

  constructor(private mockDataService: MockDataService) { }

  ngOnInit(): void {
    this.mockDataService.getUpcomingInvoices().subscribe(data => this.upcomingInvoices = data);
  }

  openPaymentModal(invoice: any): void {
    this.selectedInvoice = invoice;
  }

  closePaymentModal(): void {
    this.selectedInvoice = null;
    this.paymentAmount = null;
  }

  collectPayment(): void {
    if (this.paymentAmount! > 0) {
      this.mockDataService.collectPayment().subscribe(response => {
        this.upcomingInvoices = this.upcomingInvoices.filter(inv => inv.id !== this.selectedInvoice.id);
        this.closePaymentModal();
      });
    }
  }
}
