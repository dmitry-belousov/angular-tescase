import { Component, OnInit } from '@angular/core';
import { BookmarksService } from 'src/app/services/bookmarks.service';
import { IRepo } from 'src/app/helpers/interfaces';
import { ActivatedRoute } from '@angular/router';
import { ListAnchors } from 'src/app/helpers/abstracts';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent extends ListAnchors implements OnInit {
  public list: Array<IRepo>;
  constructor(private bookmarksService: BookmarksService, router: ActivatedRoute) {
    super(router);
  }

  ngOnInit() {
    this.bookmarksService.bookmarksSubject.subscribe((data) => {
      this.list = data;
    });
  }
  performAction($event: Event, item: IRepo) {
    $event.stopPropagation();
    $event.preventDefault();
    this.bookmarksService.removeFromBookmarks(item);
  }
}
