import { Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {path:'signup', component:SignUpComponent},
    {path:'signin', component:SignInComponent},
    {path:'dashboard', component:DashboardComponent},
];
