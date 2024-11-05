import { Routes } from '@angular/router';
import { LogInComponent } from './auth/log-in/log-in.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';

export const routes: Routes = [
    { path: 'logIn', component : LogInComponent, pathMatch: 'full' },
    { path: 'signIn', component : SignInComponent },
    { path: 'dashboard', component : DashboardComponent },
];
