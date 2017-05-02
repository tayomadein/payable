import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';

import { ServiceComponent } from '../service.component';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  firstname: string = "";
  lastname: string = "";
  email: string = "";

  constructor(public dialog: MdDialog) { }

  ngOnInit() {
  }
  
  paynow(){
    console.log(this.firstname, this.lastname, this.email);

  }

}




