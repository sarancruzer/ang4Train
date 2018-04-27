import { ProjectModule } from './component/project/project.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';

import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ManageUsersComponent } from './component/users/manage-users/manage-users.component';


// Import containers
import {
  FullLayoutComponent,
  SimpleLayoutComponent
} from '../app/component/_containers';

const APP_CONTAINERS = [
  FullLayoutComponent,
  SimpleLayoutComponent
];

// Import containers
import {
  HeaderComponent,
  SidebarComponent,
  FooterComponent
} from '../app/component/_shared';

const APP_COMPONENTS = [
  HeaderComponent,
  SidebarComponent,
  FooterComponent
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    PageNotFoundComponent,
    DashboardComponent,
    ManageUsersComponent,
    ...APP_CONTAINERS,
    ...APP_COMPONENTS,
    ProjectModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
