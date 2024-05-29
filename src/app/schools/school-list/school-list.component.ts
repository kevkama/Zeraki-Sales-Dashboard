import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-school-list',
  templateUrl: './school-list.component.html',
  styleUrls: ['./school-list.component.scss']
})
export class SchoolListComponent implements OnInit {
  schools: any[] = [];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:3000/schools').subscribe(data => {
      this.schools = data;
    });
  }

  viewDetails(id: number): void {
    this.router.navigate(['/schools/details', id]);
  }
}
