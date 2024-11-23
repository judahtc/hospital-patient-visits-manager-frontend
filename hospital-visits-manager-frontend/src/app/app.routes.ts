import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PortalComponent } from './portal/portal.component';
import { DashboadComponent } from './dashboad/dashboad.component';
import { PatientsComponent } from './patients/patients.component';
import { VisitsComponent } from './visits/visits.component';
import { UsersComponent } from './users/users.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'portal',
    component: PortalComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboadComponent,
      },
      {
        path: 'patients',
        component: PatientsComponent,
      },
      {
        path: 'visits',
        component: VisitsComponent,
      },
      {
        path: 'users',
        component: UsersComponent,
      },
    ],
  },
  { path: '', component: LoginComponent },
];
