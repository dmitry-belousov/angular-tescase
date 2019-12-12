import { Component, OnInit } from '@angular/core';
import { BookmarksService } from 'src/app/services/bookmarks.service';
import { IRepo } from 'src/app/helpers/interfaces';

@Component({
  selector: 'app-bookmark-counter',
  templateUrl: './bookmark-counter.component.html',
  styleUrls: ['./bookmark-counter.component.scss']
})
export class BookmarkCounterComponent implements OnInit {
  public bookmarksCount = 0;
  constructor(public bookmarkService: BookmarksService) { }

  ngOnInit() {
    this.bookmarkService.bookmarksSubject.asObservable().subscribe((items: Array<IRepo>) => {
      this.bookmarksCount = items.length;
    });
  }
}
