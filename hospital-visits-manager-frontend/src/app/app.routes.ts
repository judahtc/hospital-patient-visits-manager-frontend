import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PortalComponent } from './portal/portal.component';
import { DashboadComponent } from './dashboad/dashboad.component';
import { PatientsComponent } from './patients/patients.component';
import { VisitsComponent } from './visits/visits.component';
import { UsersComponent } from './users/users.component';
import { VisitorsComponent } from './visitors/visitors.component';
import { PatientLoginComponent } from './patient-login/patient-login.component';
import { PatientComponent } from './patient/patient.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signin', component: PatientLoginComponent },
  { path: 'visitors', component: VisitorsComponent },
  {
    path: 'portal',
    component: PortalComponent,
    data: { breadcrumb: 'portal' },
    children: [
      {
        path: 'dashboard',
        component: DashboadComponent,
        data: { breadcrumb: 'dashboard' },
      },
      {
        path: 'patients',
        component: PatientsComponent,
        data: { breadcrumb: 'patients' },
      },
      {
        path: 'patient/:id',
        component: PatientComponent,
        data: { breadcrumb: 'patient' },
      },
      {
        path: 'visits',
        component: VisitsComponent,
        data: { breadcrumb: 'visits' },
      },
      {
        path: 'users',
        component: UsersComponent,
        data: { breadcrumb: 'users' },
      },
    ],
  },
  { path: '', component: LoginComponent },
];
