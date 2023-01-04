import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { HeaderComponent } from './header/header.component';
import {HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { QuestionComponent } from './question/question.component';
import { QuestionheaderComponent } from './questionheader/questionheader.component';
import { ChangeBgDirective } from './change-bg.directive';
import { JobComponent } from './job/job.component';
import { CareerComponent } from './career/career.component';

import { WorkComponent } from './work/work.component';
import { LikeComponent } from './like/like.component'
import { AdvicesComponent } from './advices/advices.component';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeDashboardComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    WelcomeComponent,
    QuestionComponent,
    QuestionheaderComponent,
    ChangeBgDirective,
    JobComponent,
    CareerComponent,
  
    WorkComponent,
    LikeComponent,
    AdvicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
