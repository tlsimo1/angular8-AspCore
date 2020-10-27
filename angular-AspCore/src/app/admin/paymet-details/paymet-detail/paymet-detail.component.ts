import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetailsService } from 'src/app/shared/payment-details.service';


@Component({
  selector: 'app-paymet-detail',
  templateUrl: './paymet-detail.component.html',
  styles: []
})
export class PaymetDetailComponent implements OnInit {

  constructor(public service: PaymentDetailsService, public toastr: ToastrService) { }

  ngOnInit(): void {
    this.resetForm();
  }
  
  resetForm(form?: NgForm) {
    debugger;
    if (form != null) {
      form.reset(); 
    }
    this.service.formData = {
      PMId: 0,
      CardOwnerName: '',
      CardNumber: '',
      ExpirationDate: '',
      CVV: ''
    };
  }


  onSubmit(form: NgForm) {
    if(this.service.formData.PMId===0) 
    this.insertRecord(form.value)
    else 
    this.updateRecord(form.value);
 }

  insertRecord(form: NgForm)
  {
    this.service.postPaymentDetail().subscribe(res => {
      this.toastr.success('Submitted successfully', 'Payment Detail Register');
      this.service.refreshList();
      this.resetForm(form);
      
      },
      err=>{
        console.log(err);
      }
    )
  }
  updateRecord(form: NgForm)
  {
    this.service.putPaymentDetail().subscribe(res => {
      this.toastr.info('Updating successfully', 'Payment Detail Register');
      this.service.refreshList();
      this.resetForm(form);
      
      },
      err=>{
        console.log(err);
      }
    )
  }
  
}
