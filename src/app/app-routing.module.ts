import { Component, NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from "./pages/login/login.component";
import { SignupComponent } from "./pages/signup/signup.component";
import { AdminLayoutComponent } from "./layout/admin-layout/admin-layout.component";
import { AppLayoutComponent } from "./layout/app-layout/app-layout.component";
import { AdminClientsComponent } from "./pages/admin-clients/admin-clients.component";
import { AdminWorkersComponent } from "./pages/admin-workers/admin-workers.component";
import { AdminRequestsComponent } from "./pages/admin-requests/admin-requests.component";
import { TicketListComponent } from "./pages/ticket-list/ticket-list.component";
import { MainComponent } from "./pages/main/main.component";
import { GuestGuard } from "./auth/guest.guard";
import { AuthedGuard } from "./auth/authed.guard";
import { ProfileComponent } from "./components/profile/profile.component";
import { WorkerProfileComponent } from "./pages/worker-profile/worker-profile.component";
import { AdminGuard } from "./auth/admin.guard";
import { WorkerGuard } from "./auth/worker.guard";
import { LoginAdminComponent } from "./pages/login-admin/login-admin.component";
import { WorkerDashboardComponent } from "./pages/worker-dashboard/worker-dashboard.component";
import { ChatComponent } from "./components/chat/chat.component";
import { AuthComponent } from "./components/auth/auth.component";

const routes: Routes = [
  {
    path: "",
    component: AppLayoutComponent,
    children: [
      { path: "", component: MainComponent, canActivate: [AuthedGuard] },
      { path: "signup", component: SignupComponent, canActivate: [GuestGuard] },
      { path: "home", component: HomeComponent, canActivate: [GuestGuard] },
      { path: "ticket-list", component: TicketListComponent, canActivate: [AuthedGuard] },
      { path: "profile", component: ProfileComponent, canActivate: [AuthedGuard] },
      { path: "worker/home", component: WorkerDashboardComponent, canActivate: [AuthedGuard] },
      { path: "worker/profile/:id", component: WorkerProfileComponent, canActivate: [AuthedGuard, /*WorkerGuard*/] },
      {path:"chat",component:ChatComponent, canActivate: [AuthedGuard]}
    ],
  }, 
  { path: '', redirectTo: '/app/home', pathMatch: 'full' },
  { path: "login", component: AuthComponent, canActivate: [GuestGuard] },
  {
    path: "administration",
    component: AdminLayoutComponent,
    canActivate: [AuthedGuard],
    children: [
      { path: "home", component: AdminClientsComponent, canActivate: [AdminGuard] },
      { path: "clients", component: AdminClientsComponent, canActivate: [AdminGuard] },
      { path: "workers", component: AdminWorkersComponent, canActivate: [AdminGuard] },
      { path: "requests", component: AdminRequestsComponent, canActivate: [AdminGuard] },
    ],
  },
  {
    path: "administration/login",
    component: LoginAdminComponent,
    canActivate: [GuestGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
