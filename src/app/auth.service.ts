import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users = [
    {username: 'user1', password: '123456'},
    {username: 'user1', password: '123456'},
  ]
  getUser(username: string): Observable<any> {
    const user = this.users.find((item) => item.username === username);
    return of(user);
  }
}
