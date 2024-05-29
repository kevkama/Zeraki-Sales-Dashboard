import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolsRoutingModule } from './schools-routing.module';
import { SchoolListComponent } from './school-list/school-list.component';
import { SchoolDetailsComponent } from './school-details/school-details.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { CollectionsComponent } from './collections/collections.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SchoolListComponent,
    SchoolDetailsComponent,
    InvoicesComponent,
    CollectionsComponent
  ],
  imports: [
    CommonModule,
    SchoolsRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class SchoolsModule { }
