import { Component, OnInit } from "@angular/core";
import { BookmarksService } from "src/app/services/bookmarks.service";
import { IRepo } from "src/app/helpers/interfaces";
import { ActivatedRoute } from "@angular/router";
import { ListAnchors } from "src/app/helpers/abstracts";
import { RepositoryService } from "src/app/project/services/repository.service";

@Component({
  selector: "app-bookmarks",
  templateUrl: "./bookmarks.component.html",
  styleUrls: ["./bookmarks.component.scss"]
})
export class BookmarksComponent extends ListAnchors implements OnInit {
  public list: Array<IRepo>;
  constructor(
    private bookmarksService: BookmarksService,
    router: ActivatedRoute,
    private repoService: RepositoryService,
  ) {
    super(router);
  }

  ngOnInit() {
    this.repoService.listSubject.subscribe(dataSubject => {
      this.bookmarksService.bookmarksSubject.subscribe(dataBookmarks => {
        this.list = dataSubject
        .map(el => {
          let b = dataBookmarks.find(it =>  el.name === it.name);
          return  { ...el, ...b };
        }).filter(elem => elem.id);
      });
    });
  }
  performAction($event: Event, item: IRepo) {
    $event.stopPropagation();
    $event.preventDefault();
    this.bookmarksService.removeFromBookmarks(item);
  }
}
