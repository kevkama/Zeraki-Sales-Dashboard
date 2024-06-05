import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-school-details',
  templateUrl: './school-details.component.html',
  styleUrls: ['./school-details.component.scss']
})
export class SchoolDetailsComponent implements OnInit {
  school: any;
  invoices: any[] = [];
  collections: any[] = [];

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    const schoolId = this.route.snapshot.paramMap.get('id') ?? '';

    // Get school details
    this.http.get<any>(`https://zeraki-db-pf3v.onrender.com/api/schools/${schoolId}`).subscribe(data => {
      this.school = data;
    });

    // Get invoices
    const invoicesParams = new HttpParams().set('schoolId', schoolId);
    this.http.get<any[]>('https://zeraki-db-pf3v.onrender.com/api/invoices', { params: invoicesParams }).subscribe(data => {
      this.invoices = data;
    });

    // Get collections
    const collectionsParams = new HttpParams().set('schoolId', schoolId);
    this.http.get<any[]>('https://zeraki-db-pf3v.onrender.com/api/collections', { params: collectionsParams }).subscribe(data => {
      this.collections = data;
    });
  }
}