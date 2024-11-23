import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PortalComponent } from './portal/portal.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'portal', component: PortalComponent },
  { path: '', component: LoginComponent },
];
