import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { TdLoadingService } from '@covalent/core';
import { TdDialogService } from '@covalent/core';

@Component({
  selector: 'qs-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  loginForms: any = 'login'; //value for selecting form
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  tos: boolean = false;

  constructor(private _router: Router,
              private _loadingService: TdLoadingService, private _dialogService: TdDialogService) {}

  login(): void {
    this._loadingService.register();
    this._dialogService.openAlert({
      message: 'This is a Mock Log In feature',
      title: 'Logged In!',
      closeButton: 'Dismiss',
    });
    //alert('Mock log in as ' + this.username);
    setTimeout(() => {
      this._router.navigate(['/templates/profile']);
      this._loadingService.resolve();
    }, 2000);
  }
}
