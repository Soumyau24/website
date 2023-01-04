import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CareerComponent } from './career/career.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { HeaderComponent } from './header/header.component';
import { JobComponent } from './job/job.component';
import { LikeComponent } from './like/like.component';
import { LoginComponent } from './login/login.component';
import { QuestionComponent } from './question/question.component';
import { SignupComponent } from './signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { WorkComponent } from './work/work.component';

const routes: Routes = [
// {path:'',redirectTo:'welcome',pathMatch:"full"},
  {path:"welcome", component:WelcomeComponent},
  {path:"question", component:QuestionComponent},
{
path:'',redirectTo:'home',pathMatch:'full'
},
{
  path:"employee",component:EmployeeDashboardComponent
},
{
  path:"home",component:HeaderComponent
},
{
  path:"login",component:LoginComponent
},
{
  path:"signup",component:SignupComponent
},
{path:'job',component:JobComponent},
{path:'carrer',component:CareerComponent},

{path:'work',component:WorkComponent},
{path:'like',component:LikeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
