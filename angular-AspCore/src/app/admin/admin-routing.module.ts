import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymetDetailListComponent } from './paymet-details/paymet-detail-list/paymet-detail-list.component';
import { PaymetDetailComponent } from './paymet-details/paymet-detail/paymet-detail.component';
import { PaymetDetailsComponent } from './paymet-details/paymet-details.component';


const routes: Routes = [
  {path: 'paymet-details', component: PaymetDetailsComponent},
  {path: 'Detail-payment', component: PaymetDetailComponent},
  {path: 'List-payment', component: PaymetDetailListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
