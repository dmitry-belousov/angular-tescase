import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { IRepo, IUser, IRepoUser } from "src/app/helpers/interfaces";
import { ReplaySubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class RepositoryService {
  public listSubject: ReplaySubject<Array<IRepo>> = new ReplaySubject<
    Array<IRepo>
  >(1);
  constructor(private httpClient: HttpClient) {
    this.httpClient
      .get<Array<IRepo>>("https://github-trending-api.now.sh/repositories")
      .subscribe((repos: Array<IRepo>) => {
        this.listSubject.next(repos);
        this.listSubject.complete();
      });
  }

  getUser({ username }: IRepoUser) {
    return this.httpClient.get<IUser>(
      `https://api.github.com/users/${username}`
    );
  }
}
