import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Route, Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-portal',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './portal.component.html',
  styleUrl: './portal.component.css',
})
export class PortalComponent implements OnInit {
  dashboard = false;
  patients = false;
  visits = false;
  users = false;

  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
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

    console.log(this.dashboard);
    console.log(this.dashboard);
    console.log(this.dashboard);
    console.log(this.dashboard);
    console.log(this.dashboard);
    console.log(this.dashboard);
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
