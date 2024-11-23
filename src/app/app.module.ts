import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { LandFormComponent } from './land-form/land-form.component';
import { ContactComponent } from './contact/contact.component';
import { RecommendationComponent } from './recommendation/recommendation.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    NavComponent,
    HomeComponent,
    LandFormComponent,
    ContactComponent,
    RecommendationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
