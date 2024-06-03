import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {
  private apiUrl = 'https://zeraki-db-pf3v.onrender.com';

  constructor(private http: HttpClient) { }

  getCollections(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/collection`);
  }

  getSignups(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/signups`);
  }

  getTotalRevenue(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/totalRevenue`);
  }

  getBouncedCheques(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/bouncedCheques`);
  }

  getUpcomingInvoices(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/upcomingInvoices`);
  }

  collectPayment(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/collect-payment`);
  }
}
