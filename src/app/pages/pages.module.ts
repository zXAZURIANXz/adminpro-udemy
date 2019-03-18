
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';

/* RUTAS HIJAS */
import { PAGES_ROUTES } from './pages.routes';

/* PLUGINS */
import { ChartsModule } from 'ng2-charts';

/* TEMPORAL */
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficaComponent } from '../components/grafica/graficaDona.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';



@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementadorComponent,
        GraficaComponent,
        AccountSettingsComponent
        
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule
    ]
})


export class PagesModule { }
