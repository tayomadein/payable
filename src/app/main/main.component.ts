import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'qs-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {

  routes: Object[] = [{
      title: 'Home',
      route: '/templates',
      icon: 'dashboard',
    }, {
      title: 'Services',
      route: '/templates/service',
      icon: 'local_laundry_service',
    }, {
      title: 'Company',
      route: '/templates',
      icon: 'location_city',
    }, {
      title: 'Support',
      route: '/templates',
      icon: 'group',
    }
  ];

  constructor(private _router: Router) {}

  logout(): void {
    this._router.navigate(['/login']);
  }
}
