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

const routes: Routes = [
  {
    path: "app",
    component: AppLayoutComponent,
    children: [
      { path: "signup", component: SignupComponent },
      { path: "home", component: HomeComponent },
      { path: "login", component: LoginComponent },
    ],
  },
  {
    path: "administration",
    component: AdminLayoutComponent,
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
