import { AgendaModule } from './agenda/agenda.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { MatMenuModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { UserAdminModule } from './user-admin/user-admin.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MaterialImportsModule } from './material-imports-module/material-imports.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgendaModule,
    MatMenuModule,
    MaterialImportsModule,
    UserAdminModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
