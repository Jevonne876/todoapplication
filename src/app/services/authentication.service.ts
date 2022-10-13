import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { User } from '../models/user-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private api = environment.api;

  constructor(private http: HttpClient) { }

  registerUser(user: User): Observable<User | HttpErrorResponse> {
    return this.http.post<User | HttpErrorResponse>(`${this.api}post/register-new-user`, user);
  }

  userLogin(user: User): Observable<HttpResponse<User>> {
    return this.http.post<User>(`${this.api}post/login`, user, { observe: 'response' })
  }
}

{ observe: 'response' }
