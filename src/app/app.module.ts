import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { FullLayoutComponent } from './component/_containers/full-layout/full-layout.component';
import { SimpleLayoutComponent } from './component/_containers/simple-layout/simple-layout.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HeaderComponent } from './component/_shared/header/header.component';
import { FooterComponent } from './component/_shared/footer/footer.component';
import { SidebarComponent } from './component/_shared/sidebar/sidebar.component';
import { ManageUsersComponent } from './component/users/manage-users/manage-users.component';

import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    PageNotFoundComponent,
    FullLayoutComponent,
    SimpleLayoutComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ManageUsersComponent
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
