import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { CampusUserComponent } from './campus-user/campus-user.component';
import { CampusModeratorComponent } from './campus-moderator/campus-moderator.component';
import { CampusAdminComponent } from './campus-admin/campus-admin.component';

//noinspection TypeScriptValidateTypes
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: CampusUserComponent },
  { path: 'mod', component: CampusModeratorComponent },
  { path: 'admin', component: CampusAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }