import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TokenInterceptor } from './auth/auth.interceptor';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { AdminClientsComponent } from './pages/admin-clients/admin-clients.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableListComponent } from './components/table-list/table-list.component';
import { AdminWorkersComponent } from './pages/admin-workers/admin-workers.component';
import { AdminRequestsComponent } from './pages/admin-requests/admin-requests.component';
import { TicketListComponent } from './pages/ticket-list/ticket-list.component';
import { TicketCardComponent } from './components/ticket-card/ticket-card.component';
//import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    AdminLayoutComponent,
    AppLayoutComponent,
    AdminClientsComponent,
    FooterComponent,
    SidebarComponent,
    NavbarComponent,
    TableListComponent,
    AdminWorkersComponent,
    AdminRequestsComponent,
    TicketListComponent,
    TicketCardComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //ToastrModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
