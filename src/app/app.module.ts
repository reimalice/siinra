import { AppComponent } from './app.component';
import { routes } from './app-routing';
import { NgModule, LOCALE_ID } from '@angular/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

//importación del soporte de animaciones y componentes de Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';

//Template principal
import { TemplateComponent } from './template/template.component';
import { FooterComponent } from './template/footer/footer.component';
import { HeaderComponent } from './template/header/header.component';
import { SidebarComponent } from './template/sidebar/sidebar.component';
import { SpinnerComponent } from './template/shared/spinner.component';
import { SharedModule} from './template/shared/shared.module'

//Componente Login
import { LoginComponent } from './login/login.component';

import {CoreModule} from "./core/core.module";
import {environment} from '../environments/environment';
import {ServiceWorkerModule} from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    SpinnerComponent,
    LoginComponent,
        
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    FlexLayoutModule,
    CoreModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })

  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'en-GB' },
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
