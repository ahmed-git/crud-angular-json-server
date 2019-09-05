import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiLink = "http://localhost:3000/users";
  headers = {
    "Content-Type": "application/json"
  }

  constructor(private http: HttpClient) { }

  addUser(user: User):Observable<void> {
    return this.http.post<void>(this.apiLink, user, {headers: this.headers});
  }

  updateUser(user: User): Observable<void> {
    return this.http.patch<void>(this.apiLink + '/' + user.id, user, {headers: this.headers});
  }
  
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiLink);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(this.apiLink + '/'+ id);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(this.apiLink + '/' + id);
  }
}
