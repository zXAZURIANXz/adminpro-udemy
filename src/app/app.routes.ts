import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { RegisterComponent } from './login/register.component';



const appRouters: Routes = [

    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent },
    { path: '**', component: NopagefoundComponent}

];


export const APP_ROUTES = RouterModule.forRoot(appRouters, { useHash : true });
