import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { FiltrosComponent } from './filtros/filtros.component';
import { TablaComponent } from './tabla/tabla.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PaginationModule,PaginationConfig } from 'ngx-bootstrap/pagination';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    FiltrosComponent,
    TablaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    PaginationModule,
  ],
  providers: [PaginationConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
