import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetails } from 'src/app/shared/payment-details.model';
import { PaymentDetailsService } from 'src/app/shared/payment-details.service';

@Component({
  selector: 'app-paymet-detail-list',
  templateUrl: './paymet-detail-list.component.html',
  styles: []
})
export class PaymetDetailListComponent implements OnInit {

  constructor(public service : PaymentDetailsService, public toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }
  populateForm(form:PaymentDetails )
  {
    this.service.formData= Object.assign({},form) ;
  }
  onDelete(id)
  {
    this.service.deletePaymentDetail(id).subscribe(res=>{
      this.toastr.warning('deleted successfully', 'Payment Detail deleted');
      this.service.refreshList();
    })
  }
}
