import { Component, OnInit, Input } from '@angular/core';
import { Agenda } from '../shared/Agenda';
import { AgendaService } from '../shared/agenda.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-agenda-detail',
  templateUrl: './agenda-detail.component.html',
  styleUrls: ['./agenda-detail.component.css']
})
export class AgendaDetailComponent implements OnInit {
  public agenda: Agenda;

  constructor(
    private agendaService: AgendaService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.getAgenda();
  }

  private getAgenda() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.agendaService.getAgenda(id).subscribe({
      next: agenda => this.agenda = agenda,
      error: err => this.handleError(err)
    });
  }

  private handleError(err: any) {
    console.log(err);
  }

}
