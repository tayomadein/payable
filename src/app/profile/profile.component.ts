import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  logout(): void {
    this._router.navigate(['/login']);
  }
  
   services: Array<{
        name: string,
        description: string,
        price: number,
        imgsrc: string
    }> = [
            {
                name:"Topup",
                description:"4GB has been recharged on +234-701-888-555",
                price: 64,
                imgsrc: "assets/images/mobile.jpg"
            },
            {
                name:"Transfer",
                description:"Transfer to Ade Agwu was successful",
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
                description:"Ticket for Fly Nigeria",
                price: 60,
                imgsrc: "assets/images/airline.jpg"
            }
            ,
            {
                name:"Fees",
                description:"Payment to Payable Highschool",
                price: 119,
                imgsrc: "assets/images/class.jpg"
            },
            {
                name:"Donate",
                description:"Donation made to BCAN",
                price: 1500,
                imgsrc: "assets/images/donate.jpg"
            }
        ];

}
