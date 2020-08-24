import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './user-admin/login/login.component';
import { RegisterComponent } from './user-admin/register/register.component';
import { AgendaListComponent } from './agenda/agenda-list/agenda-list.component';
import { AgendaDetailComponent } from './agenda/agenda-detail/agenda-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'agendas', component: AgendaListComponent},
  {path: 'agendas/:id', component: AgendaDetailComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
