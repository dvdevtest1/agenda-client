import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../shared/agenda.service';
import { Observable } from 'rxjs';
import { Agenda } from '../shared/Agenda';

@Component({
  selector: 'app-agenda-list',
  templateUrl: './agenda-list.component.html',
  styleUrls: ['./agenda-list.component.css']
})
export class AgendaListComponent implements OnInit {
  public agendas$: Observable<Agenda[]>;

  constructor(private agendaService: AgendaService) { }

  ngOnInit() {
    this.agendas$ = this.agendaService.getAgendas();
  }

}
