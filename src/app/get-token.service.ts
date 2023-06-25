import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetTokenService {

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string) {
    const loginData = {username: username, password: password}

    return this.http.post('http://localhost:8000/api/login_check', loginData);
  }
}

