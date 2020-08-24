export interface Todo {
  Id: number;
  Description: string;
  WorkChunk: number;
  PauseDuration: number;
  DueDate: Date  | null;
  AgendaId: number;
}
