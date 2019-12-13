import { Injectable } from "@angular/core";
import { AuthUser } from "../helpers/interfaces";
import { HttpClient } from "@angular/common/http";

const baseUrl = "http://localhost:8080/";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  isAuth;
  constructor(private httpClient: HttpClient) {
    this.isAuth = !!localStorage.getItem("token");
  }
  register({ login, password }: AuthUser) {
    return this.httpClient
      .post<AuthUser>(`${baseUrl}register`, { login, password })
      .toPromise()
      .then(res => {
        this.setIsAuth(false);
      });
  }

  login({ login, password }: AuthUser) {
    return this.httpClient
      .post<AuthUser>(`${baseUrl}login`, { login, password })
      .toPromise()
      .then(res => {
        this.setIsAuth(true);
        localStorage.setItem("token", res.token);
      });
  }

  logout() {
    localStorage.removeItem("token");
    this.setIsAuth(false);
  }

  setIsAuth(value) {
    this.isAuth = value;
    return this.isAuth;
  }

  getIsAuth() {
    return this.isAuth;
  }
}
