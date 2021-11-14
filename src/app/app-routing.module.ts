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

const routes: Routes = [
  {
    path: "app",
    component: AppLayoutComponent,
    children: [
      { path: "", component: MainComponent , canActivate: [AuthedGuard] },
      { path: "signup", component: SignupComponent , canActivate: [GuestGuard] },
      { path: "home", component: HomeComponent , canActivate: [GuestGuard] },
      { path: "login", component: LoginComponent , canActivate: [GuestGuard] },
      { path: "ticket-list", component: TicketListComponent , canActivate: [GuestGuard] },
      {path:"profile",component:ProfileComponent},
      {path:"worker-profile",component:WorkerProfileComponent}
    ],
  }, { path: '', redirectTo: '/app/home', pathMatch: 'full' },
  {
    path: "administration",
    component: AdminLayoutComponent,
    canActivate: [AuthedGuard] ,
    children: [
      { path: "clients", component: AdminClientsComponent },
      { path: "workers", component: AdminWorkersComponent },
      { path: "requests", component: AdminRequestsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
