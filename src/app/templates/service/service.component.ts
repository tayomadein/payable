import { Component } from '@angular/core';
import { ViewContainerRef } from '@angular/core';
import { TdDialogService } from '@covalent/core';
import { DialogComponent } from './dialog/dialog.component';
import { MdDialog } from '@angular/material';
import { PaymentComponent } from './payment/payment.component';

@Component({
  selector: 'qs-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
})
export class ServiceComponent {
    
    constructor(private _dialogService: TdDialogService, private _viewContainerRef: ViewContainerRef, private dialog: MdDialog) {}

    openConfirm(service): void {
        console.log(service);
        let j = service;
        this._dialogService.openConfirm({
            message: 'Are you sure you want to pay ₦'+j.price+' for this service?',
            title: ''+j.name,
            cancelButton: 'Edit Quantity',
            acceptButton: 'Pay',
        }).afterClosed().subscribe((accept: boolean) => {
            if (accept) {
            // Open Pay Dialog
            this.paynow();
            } else {
            // Open Edit Dialog
            this.openDialog();
            }
        });
    }

    openDialog(): void {
        this.dialog.open(DialogComponent, {
            height: '50%', // can be px or %
            width: '30%', // can be px or %
        });
    }

    paynow(){
        this.dialog.open(PaymentComponent, {
            height: '60%', // can be px or %
            width: '50%', // can be px or %
        });
    }
    
    search($event){}
   
    services: Array<{
        name: string,
        description: string,
        price: number,
        imgsrc: string
    }> = [
            {
                name:"Topup",
                description:"You can no topup your data/airtime",
                price: 64,
                imgsrc: "assets/images/mobile.jpg"
            },
            {
                name:"Transfer",
                description:"Send money everywhere",
                price: 119,
                imgsrc: "assets/images/money.jpg"
            },
            {
                name:"Electricity",
                description:"Get your electricity units here!",
                price: 1500,
                imgsrc: "assets/images/elect.jpg"
            },
            {
                name:"Tickets",
                description:"Buy tickets for any airline",
                price: 60,
                imgsrc: "assets/images/airline.jpg"
            }
            ,
            {
                name:"Fees",
                description:"Pay your child's school fees",
                price: 119,
                imgsrc: "assets/images/class.jpg"
            },
            {
                name:"Donate",
                description:"Donate for a cause!",
                price: 1500,
                imgsrc: "assets/images/donate.jpg"
            }
        ];

}
