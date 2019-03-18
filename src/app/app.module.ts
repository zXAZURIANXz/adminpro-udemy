import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


/* RUTAS */
import { APP_ROUTES } from './app.routes';



/* MODULOS */
import { PagesModule } from './pages/pages.module';

/* servicios */
import { SettingsService } from './services/service.index';
import { ServiceModule } from './services/service.module';


import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { AppComponent } from './app.component';










@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,


  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    ServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
