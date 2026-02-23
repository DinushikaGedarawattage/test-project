import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8080/app/api/users';

  constructor(private http: HttpClient) {}

  registerUser(user: any): Observable<any> {
    return this.http.post(this.baseUrl, user);
  }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }
}
