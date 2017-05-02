import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';

import { UsersComponent } from './users/users.component';
import { UsersFormComponent } from './users/form/form.component';

import { LoginComponent } from './login/login.component';
import { TemplatesComponent } from './templates/templates.component';
import { ServiceComponent } from './templates/service/service.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: MainComponent, children: [{
      component: TemplatesComponent,
      path: '',
    },
    {path: 'templates', children: [
      {path: '', component: TemplatesComponent},
      {path: 'service', component: ServiceComponent},
      {path: 'profile', component: ProfileComponent},
    ]},
  ]},
];

export const appRoutingProviders: any[] = [

];

export const appRoutes: any = RouterModule.forRoot(routes, { useHash: true });
