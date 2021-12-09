import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/administration/dashboard', title: 'Dashboard',  icon: 'bi bi-grid-3x3-gap-fill', class: '' },
    { path: '/administration/clients', title: 'Clients',  icon:'bi bi-person-lines-fill', class: '' },
    { path: '/administration/workers', title: 'Workers',  icon:'bi bi-briefcase-fill', class: '' },
    { path: '/administration/requests', title: 'Requests',  icon:'bi bi-envelope-plus-fill', class: '' },
    { path: '/administration/reports', title: 'Reports',  icon:'bi bi-flag-fill', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(private userService:UserService, private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  };

  logout() {
    this.userService.logout()
    .then(() => this.router.navigate(['/home']))
    .catch((e) => console.error(e))
  }
}
