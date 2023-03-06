import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersModel } from './users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get<UsersModel>(`http://localhost:3000/users`);
  }

  getUser(id: number): Observable<any> {
    return this.http.get<UsersModel>(`http://localhost:3000/users/${id}`);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete<UsersModel>(`http://localhost:3000/users/${id}`);
  }
}
