import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IRepo } from '../helpers/interfaces';
import { uniqBy } from '../helpers/functions';

@Injectable({
  providedIn: 'root'
})
export class BookmarksService {
  public bookmarksSubject: BehaviorSubject<Array<IRepo>> = new BehaviorSubject<Array<IRepo>>([]);
  constructor() {
    const values: string | null = localStorage.getItem('bookmarks');
    values
      ? this.bookmarksSubject.next(JSON.parse(values))
      : localStorage.setItem('bookmarks', JSON.stringify([]));
  }
  addToBookmarks(item: IRepo) {
    const values = uniqBy([...this.bookmarksSubject.value, item], 'name');
    this.bookmarksSubject.next(values);
    localStorage.setItem('bookmarks', JSON.stringify(values));
  }

  removeFromBookmarks(item: IRepo) {
    const values = this.bookmarksSubject.value.filter(({ name }) => name !== item.name);
    this.bookmarksSubject.next(values);
    localStorage.setItem('bookmarks', JSON.stringify(values));
  }
}
