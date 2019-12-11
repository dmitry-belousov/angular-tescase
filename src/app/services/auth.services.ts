import { Injectable } from "@angular/core";
import { AuthUser } from "../helpers/interfaces";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  isAuth;
  constructor(private httpClient: HttpClient) {
    this.isAuth = !!localStorage.getItem("token");
  }
  register({ login, password }: AuthUser) {
    console.log({ login, password });
    return this.httpClient
      .post<AuthUser>("http://localhost:8080/register", { login, password })
      .toPromise()
      .then(res => {
        console.log(res);
        this.isAuth = false;
      });
  }

  login({ login, password }: AuthUser) {
    console.log({ login, password });
    return this.httpClient
      .post<AuthUser>("http://localhost:8080/login", { login, password })
      .toPromise()
      .then(res => {
        console.log(res);
        this.isAuth = true;
        localStorage.setItem("token", res.token);
      });
  }

  logout() {
    localStorage.removeItem("token");
    this.isAuth = false;
  }

  getIsAuth() {
    return this.isAuth;
  }
}
