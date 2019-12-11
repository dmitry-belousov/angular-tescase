import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { IRepo } from "../helpers/interfaces";
import { uniqBy } from "../helpers/functions";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthService } from './auth.services';

// const headers = {
//   headers: new HttpHeaders({
//     "Content-Type": "application/json",
//     Authorization: `Bearer ${localStorage.getItem("token")}`
//   })
// };

@Injectable({
  providedIn: "root"
})
export class BookmarksService {
  public bookmarksSubject: BehaviorSubject<Array<IRepo>> = new BehaviorSubject<
    Array<IRepo>
  >([]);

  getHeaders() {
    return {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      })
    };
  }
  constructor(private httpClient: HttpClient, private authService: AuthService) {
    // const values: string | null = localStorage.getItem('bookmarks');
    // values
    //   ? this.bookmarksSubject.next(JSON.parse(values))
    //   : localStorage.setItem('bookmarks', JSON.stringify([]));
    this.getBookmarks();
  }

  getBookmarks() {
    if(!this.authService.getIsAuth()) return;
    this.httpClient
      .get<Array<IRepo>>("http://localhost:8080/projects", {
        ...this.getHeaders()
      })
      .toPromise()
      .then(res => {
        console.log(res);
        this.bookmarksSubject.next(res);
      });
  }

  addToBookmarks(item: IRepo) {
    // const values = uniqBy([...this.bookmarksSubject.value, item], "name");
    // this.bookmarksSubject.next(values);
    // localStorage.setItem('bookmarks', JSON.stringify(values));
    console.log(item);
    if(!this.authService.getIsAuth()) return;
    return this.httpClient
      .post<IRepo>(
        "http://localhost:8080/projects/add",
        { name: item.name, author: item.author },
        { ...this.getHeaders() }
      )
      .toPromise()
      .then(res => {
        console.log(res);
        const values = uniqBy([...this.bookmarksSubject.value, res], "name");
        this.bookmarksSubject.next(values);
      });
  }

  removeFromBookmarks(item: IRepo) {
    // const values = this.bookmarksSubject.value.filter(
    //   ({ name }) => name !== item.name
    // );
    // this.bookmarksSubject.next(values);
    // localStorage.setItem('bookmarks', JSON.stringify(values));
    console.log(item);
    if(!this.authService.getIsAuth()) return;
    return this.httpClient
      .delete(`http://localhost:8080/projects/delete/${item.id}`, {
        ...this.getHeaders()
      })
      .toPromise()
      .then(res => {
        console.log(res);
        // const values = uniqBy([...this.bookmarksSubject.value, item], "name");
        const values = this.bookmarksSubject.value.filter(
          ({ name }) => name !== item.name
        );
        this.bookmarksSubject.next(values);
      });
  }
}