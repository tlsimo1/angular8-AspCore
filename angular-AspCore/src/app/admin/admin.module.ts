import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PaymetDetailListComponent } from './paymet-details/paymet-detail-list/paymet-detail-list.component';
import { PaymetDetailComponent } from './paymet-details/paymet-detail/paymet-detail.component';
import { PaymetDetailsComponent } from './paymet-details/paymet-details.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    PaymetDetailsComponent,
    PaymetDetailComponent,
    PaymetDetailListComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    HttpClientModule,
  ]
})
export class AdminModule { }
