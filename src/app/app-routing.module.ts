import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dash/dashboard.component';
import { CreateComponent } from './create-user/create.component';
import { UpdateComponent } from './update-user/update.component';
import { ListComponent } from './list-users/list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dash', component: DashboardComponent, children: [
    { path: 'crud', component: CreateComponent },
    { path: 'user/:id', component: UpdateComponent },
    { path: 'users', component: ListComponent }
  ] },  
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
