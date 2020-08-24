import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendaListComponent } from './agenda-list/agenda-list.component';
import { AgendaDetailComponent } from './agenda-detail/agenda-detail.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { MaterialImportsModule } from '../material-imports-module/material-imports.module';
import { AgendaService } from './shared/agenda.service';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AgendaListComponent,
    AgendaDetailComponent,
    TodoListComponent,
    TodoItemComponent
  ],
  imports: [
    CommonModule,
    MaterialImportsModule,
    RouterModule
  ],
  exports: [AgendaListComponent],
  providers: [AgendaService]
})
export class AgendaModule { }
