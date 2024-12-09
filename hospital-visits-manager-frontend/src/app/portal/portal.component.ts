import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RouterOutlet,
  Route,
  Router,
  ActivatedRoute,
  RouterModule,
} from '@angular/router';
import { BreadcrumbService } from '../breadcrumb.service';

@Component({
  selector: 'app-portal',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './portal.component.html',
  styleUrl: './portal.component.css',
})
export class PortalComponent implements OnInit {
  breadcrumbs: Array<{ label: string; url: string }> = [];
  dashboard = false;
  patients = false;
  visits = false;
  users = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private breadcrumbService: BreadcrumbService
  ) {}
  ngOnInit(): void {
    this.breadcrumbs = this.breadcrumbService.breadcrumbs;
    this.route.queryParamMap.subscribe((params) => {
      const tab = params.get('tab');
      if (tab === 'dashboard') {
        this.dashboard_func();
      } else if (tab === 'patients') {
        this.patients_func();
      } else if (tab === 'visits') {
        this.visits_func();
      } else if (tab === 'users') {
        this.users_func();
      }
    });
  }

  dashboard_func() {
    this.dashboard = true;
    this.patients = false;
    this.visits = false;
    this.users = false;
  }

  patients_func() {
    this.dashboard = false;
    this.patients = true;
    this.visits = false;
    this.users = false;
  }

  visits_func() {
    this.dashboard = false;
    this.patients = false;
    this.visits = true;
    this.users = false;
  }

  users_func() {
    this.dashboard = false;
    this.patients = false;
    this.visits = false;
    this.users = true;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
