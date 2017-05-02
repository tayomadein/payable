import { Component, OnInit, Input } from '@angular/core';
import { MdDialog } from '@angular/material';
import { PaymentComponent } from '../payment/payment.component';

import { ServiceComponent } from '../service.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  selectedService: string;
  lastPrice: number;

  services : any = ["Topup", "Transfer", "Electricity", "Tickets", "Fees", "Donate"];

  constructor(public dialog: MdDialog) { }

  ngOnInit() {
  }

  paynow(){
    console.log(this.selectedService);
    this.dialog.open(PaymentComponent, {
      height: '60%', // can be px or %
      width: '50%', // can be px or %
    });
  }

}
