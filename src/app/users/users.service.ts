import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersModel } from './users.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get<UsersModel>(`http://localhost:3000/users`);
  }

  getUsersLogin(user: UsersModel): Observable<any> {
    return this.http.get<UsersModel>(
      `http://localhost:3000/users?email=${user.email}&password=${user.password}`
    );
  }

  getUser(id: number): Observable<any> {
    return this.http.get<UsersModel>(`http://localhost:3000/users/${id}`);
  }

  updateUser(id: number, data: UsersModel): Observable<any> {
    if (id) {
      return this.http.patch<UsersModel>(
        `http://localhost:3000/users/${id}`,
        data
      );
    }

    data.createdAt = Date.now();
    return this.http.post<UsersModel>(`http://localhost:3000/users`, data);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete<UsersModel>(`http://localhost:3000/users/${id}`);
  }
}
