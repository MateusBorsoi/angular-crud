import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { IUser } from './interface/IUser.interface';

@Injectable({
  providedIn: 'root',
})
export class CadastroService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  createUser(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(`${this.baseUrl}/users`, user);
  }

  getUserById(id: number): Observable<IUser> {
    return this.http.get<IUser>(`${this.baseUrl}/users/${id}`);
  }

  getAllUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${this.baseUrl}/users`);
  }

  deleteUser(id: number): Observable<number> {
    return this.http.delete<number>(`${this.baseUrl}/users/${id}`);
  }

  updateUser(id: number, user: IUser): Observable<IUser> {
    return this.http.put<IUser>(`${this.baseUrl}/users/${id}`, user);
  }
}
