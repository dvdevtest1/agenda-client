import { Todo } from './Todo';

export interface Agenda {
  Id: number;
  Description: string;
  Todos: Todo[];
}
