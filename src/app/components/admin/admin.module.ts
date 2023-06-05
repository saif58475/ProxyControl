
 
 

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';


import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ArchwizardModule } from 'angular-archwizard';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
 
import { RouterModule } from '@angular/router';
 
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgxPrintElementModule } from 'ngx-print-element';
 
import { NgApexchartsModule } from 'ng-apexcharts';
 

 

// **  
import {NgxPaginationModule} from 'ngx-pagination';

// cookie 
import { CookieService } from 'ngx-cookie-service'

import { DxReportViewerModule } from 'devexpress-reporting-angular';
import { InsertServiceComponent } from './service/insert-service/insert-service.component';
import { ViewServiceComponent } from './service/view-service/view-service.component';
import { ViewAboutusComponent } from './aboutus/view-aboutus/view-aboutus.component';
import { InsertAboutusComponent } from './aboutus/insert-aboutus/insert-aboutus.component';
import { ViewDetailsofworkComponent } from './detailsofwork/view-detailsofwork/view-detailsofwork.component';
import { InsertDetailsofworkComponent } from './detailsofwork/insert-detailsofwork/insert-detailsofwork.component';
import { ViewListpartnerComponent } from './listpartner/view-listpartner/view-listpartner.component';
import { InsertListpartnerComponent } from './listpartner/insert-listpartner/insert-listpartner.component';




 @NgModule({
  declarations: [
    InsertServiceComponent,
    ViewServiceComponent,
    ViewAboutusComponent,
    InsertAboutusComponent,
    ViewDetailsofworkComponent,
    InsertDetailsofworkComponent,
    ViewListpartnerComponent,
    InsertListpartnerComponent,
    
  ],
  imports: [
    DxReportViewerModule,
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    ArchwizardModule,
    SweetAlert2Module,
    NgxPaginationModule,
    RouterModule,
    NgApexchartsModule,
    NgxPrintElementModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [
   CookieService
  ],
  
  exports:[ ]
})
export class AdminModule { }
