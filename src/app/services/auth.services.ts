import { Injectable } from "@angular/core";
import { AuthUser } from "../helpers/interfaces";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}
  register({ login, password }: AuthUser) {
    console.log({ login, password });
    return this.httpClient
      .post<AuthUser>("http://localhost:8080/register", { login, password })
      .toPromise()
      .then(res => console.log(res));
  }

  login({ login, password }: AuthUser) {
    console.log({ login, password });
    return this.httpClient
      .post<AuthUser>("http://localhost:8080/login", { login, password })
      .toPromise()
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.token);
      });
  }
}
