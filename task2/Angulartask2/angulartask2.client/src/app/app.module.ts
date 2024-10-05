import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, NgForm } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ServicesComponent } from './services/services.component';
import { SubServicesComponent } from './sub-services/sub-services.component';
import { RouterModule } from '@angular/router';
import { LectureComponent } from './lecture/lecture.component';
import { SubsecribtionComponent } from './subsecribtion/subsecribtion.component';
import { SubservicedetailsComponent } from './subservicedetails/subservicedetails.component';
import { RegistrationUserComponent } from './registration-user/registration-user.component';
import { LoginComponent } from './login/login.component';
import { AddServiceComponent } from './Admin/add-service/add-service.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { ServicesAdminComponent } from './Admin/services-admin/services-admin.component';
import { EditServicesComponent } from './Admin/edit-services/edit-services.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    ServicesComponent,
    SubServicesComponent,
    LectureComponent,
    SubsecribtionComponent,
    SubservicedetailsComponent,
    RegistrationUserComponent,
    LoginComponent,
    AddServiceComponent,
    DashboardComponent,
    ServicesAdminComponent,
    EditServicesComponent
  ],
  imports: [
    FormsModule,
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([

      { path: '', component: HomeComponent, pathMatch : "full" },
      { path: 'Services', component: ServicesComponent },
      { path: 'SubServices/:id', component: SubServicesComponent },
      { path: "lecture", component: LectureComponent },
      { path: "subsecribtion", component: SubsecribtionComponent },
      { path: "subseviceDeltails/:id", component: SubservicedetailsComponent },
      { path: "register", component: RegistrationUserComponent },
      { path: "login", component: LoginComponent },
      {
        path: "dashboard", component: DashboardComponent, children: [
          { path: "AddService", component: AddServiceComponent },
          { path: "AllServices", component: ServicesAdminComponent },
          { path: "EditService/:id", component: EditServicesComponent }
        ]
      }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
