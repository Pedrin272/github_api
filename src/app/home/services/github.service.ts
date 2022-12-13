import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class GithubService {
  API = 'https://api.github.com/users';
  constructor(private http: HttpClient) {}

  getDev(dev: string) {
    return this.http.get(`${this.API}/${dev}`);
  }
}
