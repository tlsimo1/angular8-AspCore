import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaymentDetails } from './payment-details.model';


@Injectable({
  providedIn: 'root'
})
export class PaymentDetailsService {
  formData: PaymentDetails;
  readonly rootURL = 'http://localhost:49997/api';
  list: PaymentDetails[];

  constructor(private http: HttpClient) { }

  postPaymentDetail() {
   return this.http.post(`${this.rootURL}/PaymentDetail`, this.formData);
  }
  putPaymentDetail() {
    debugger
   return this.http.put(`${this.rootURL}/PaymentDetail/${this.formData.PMId}`, this.formData);
  }
  deletePaymentDetail(id) {
    debugger
   return this.http.delete(`${this.rootURL}/PaymentDetail/${id}`);
  }
  refreshList()
  {
    return this.http.get(`${this.rootURL}/PaymentDetail`).toPromise().
    then(res=>this.list=res as PaymentDetails[])
  }
}
