import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './User';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userId: number;

  constructor(private httpClient: HttpClient) { }

  public registerUser(user: User): Observable<boolean> {
    return of(true);
  }

  public updateUser(user: User): Observable<boolean> {
    return of(true);
  }

  public deleteUser(user: User): Observable<boolean> {
    return of(true);
  }

  public getUser(): Observable<User> {
    return of({
      Id: 1000,
      FirstName: 'A',
      LastName: 'B',
      BirthDate: new Date(1991, 10, 10),
      Email: 'xxx@yyy.zzz'
    });
  }

  public login(email: string, password: string): Observable<boolean> {
    if (email === 'a@b.c') {
      this.userId = 1000;
      return of(true);
    } else {
      return of(false);
    }
  }

  public isLoggedIn(): boolean {
    return this.userId > 0;
  }

  public logout(): void {
    this.userId = 0;
  }
}
