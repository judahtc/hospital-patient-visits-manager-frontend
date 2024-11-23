import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Route, Router } from '@angular/router';
@Component({
  selector: 'app-portal',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './portal.component.html',
  styleUrl: './portal.component.css',
})
export class PortalComponent {}
