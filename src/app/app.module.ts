import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './create-user/create.component';
import { UpdateComponent } from './update-user/update.component';
import { ListComponent } from './list-users/list.component';
import { DashboardComponent } from './dash/dashboard.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FilterListPipe } from './list-users/filter-list.pipe';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const firebaseConfig = {
  
};

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    UpdateComponent,
    ListComponent,
    DashboardComponent,
    FilterListPipe,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
