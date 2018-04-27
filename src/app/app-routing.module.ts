import { ManageProjectComponent } from './component/project/manage-project/manage-project.component';


import {
  FullLayoutComponent ,
  SimpleLayoutComponent
} from './component/_containers';



import { DashboardComponent } from './component/dashboard/dashboard.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { ManageUsersComponent } from './component/users/manage-users/manage-users.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: '', component: FullLayoutComponent , children: [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'manageUser', component: ManageUsersComponent },
    { path: 'manageProject', component: ManageProjectComponent },
  ]},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
