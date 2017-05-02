import { NgModule, Type } from '@angular/core';
import { BrowserModule, Title }  from '@angular/platform-browser';

import { CovalentCoreModule } from '@covalent/core';
import { CovalentHttpModule, IHttpInterceptor } from '@covalent/http';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentMarkdownModule } from '@covalent/markdown';
import { CovalentChartsModule } from '@covalent/charts';
import { CovalentSearchModule } from '@covalent/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { UsersComponent } from './users/users.component';
import { UsersFormComponent } from './users/form/form.component';

import { LoginComponent } from './login/login.component';
import { TemplatesComponent } from './templates/templates.component';
import { ServiceComponent } from './templates/service/service.component';
import { PaymentComponent } from './templates/service/payment/payment.component';
import { DialogComponent } from './templates/service/dialog/dialog.component';
import { ProfileComponent } from './profile/profile.component';

import { appRoutes, appRoutingProviders } from './app.routes';

import { ChartComponent } from '../components/chart/chart.component';

import { RequestInterceptor } from '../config/interceptors/request.interceptor';

import { NgxChartsModule } from '@swimlane/ngx-charts';


const httpInterceptorProviders: Type<any>[] = [
  RequestInterceptor,
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    UsersComponent,
    UsersFormComponent,
    LoginComponent,
    ChartComponent,
    TemplatesComponent,
    ServiceComponent,
    PaymentComponent,
    DialogComponent,
    ProfileComponent,
  ], // directives, components, and pipes owned by this NgModule
  imports: [
    BrowserModule,
    CovalentCoreModule.forRoot(),
    CovalentChartsModule.forRoot(),
    CovalentHttpModule.forRoot({
      interceptors: [{
        interceptor: RequestInterceptor, paths: ['**'],
      }],
    }),
    CovalentHighlightModule.forRoot(),
    CovalentMarkdownModule.forRoot(),
    CovalentSearchModule,
    appRoutes,
    NgxChartsModule,
  ], // modules needed to run this module
  providers: [
    appRoutingProviders,
    httpInterceptorProviders,
    Title,
  ], // additional providers needed for this module
  entryComponents: [ DialogComponent, PaymentComponent ],
  bootstrap: [ AppComponent ],
})
export class AppModule {}
