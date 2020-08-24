import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Agenda } from './Agenda';
import { Todo } from './Todo';

const agendas: Agenda[] = [
  {
    Id: 1,
    Description: 'My Agenda For Work',
    Todos: [
      {
        Id: 1,
        Description: 'Finish task 1',
        WorkChunk: 0,
        PauseDuration: 0,
        DueDate: new Date(Date.now() + 1000 * 3600),
        AgendaId: 1
      },
      {
        Id: 2,
        Description: 'Finish task 2',
        WorkChunk: 0,
        PauseDuration: 0,
        DueDate: new Date(Date.now() + 2000 * 3600),
        AgendaId: 1
      }
    ]
  },
  {
    Id: 2,
    Description: 'Agenda for home',
    Todos: []
  }
];

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  constructor() { }

  public getAgendas(): Observable<Agenda[]> {
    return of(agendas);
  }

  public getAgenda(id: number): Observable<Agenda> {
    const agenda = agendas.find(a => a.Id === id);
    if (agenda) {
      return of(agenda);
    } else {
      throwError(`there is no agenda with id ${id}`);
    }
  }

  public saveAgenda(agenda: Agenda): Observable<boolean> {
    return of(true);
  }

  public saveTodo(todo: Todo): Observable<boolean> {
    return of(true);
  }

  public removeTodo(todo: Todo): Observable<boolean> {
    return of(true);
  }


}
