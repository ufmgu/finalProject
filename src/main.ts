import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { LoginComponent } from './app/login/login.component';
import { RegisterComponent } from './app/register/register.component';
import { UserComponent } from './app/user/user.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
