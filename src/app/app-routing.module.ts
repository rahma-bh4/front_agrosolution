import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { LandFormComponent } from './land-form/land-form.component';
import { RecommendationComponent } from './recommendation/recommendation.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'profile',component:ProfileComponent},
  {path:'signup',component:RegisterComponent},
  {path:'contact',component:ContactComponent},
  {path:'land',component:LandFormComponent},
  {path:'recommendation',component:RecommendationComponent},
  {path:'',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
