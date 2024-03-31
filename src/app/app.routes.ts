import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent},

    {path:'register',component:RegisterComponent},
    {path:'profile',component:ProfileComponent},


    {path:'',redirectTo:'home',pathMatch:'full'}

];
