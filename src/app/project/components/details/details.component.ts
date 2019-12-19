import { Component, OnInit } from "@angular/core";
import { RepositoryService } from "../../services/repository.service";
import { ActivatedRoute, Router } from "@angular/router";
import { IRepo } from "src/app/helpers/interfaces";
import { BookmarksService } from "src/app/services/bookmarks.service";
import { zip } from "rxjs";
import { uniqBy } from "src/app/helpers/functions";
import { RouteHistoryService } from "src/app/services/route-history.service";
import { ToastService } from "src/app/toasts/services/toast.service";
import { ToastTypes } from "src/app/toasts/helpers/enums";
import { AppRoutingModule } from 'src/app/app-routing.module';

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"]
})
export class DetailsComponent implements OnInit {
  public item: IRepo;
  public existInBookmarks: boolean;
  public sourceUrl: string;
  constructor(
    private repoService: RepositoryService,
    private route: ActivatedRoute,
    private routerHistory: RouteHistoryService,
    private router: Router,
    private bookmarkService: BookmarksService,
    private toastService: ToastService,
    // private routing: AppRoutingModule,
    
  ) {}

  ngOnInit() {
    zip(
      this.repoService.listSubject,
      this.bookmarkService.bookmarksSubject
    ).subscribe(([list, bookmarks]) => {
      let filterList = list.map(elem => {
        let bookmarkItem = bookmarks.find(it => it.name === elem.name);
        if (bookmarkItem) {
          elem = { ...bookmarkItem, ...elem };
        }
        return elem;
      });
      this.item = uniqBy([...filterList], "name").find(
        ({ name }) => name === this.route.snapshot.params.id
      );
      if (!this.item) {
        return this.toastService.show(
          `can not find item with name: ${this.route.snapshot.params.id}`,
          { type: ToastTypes.DANGER }
        );
      }
      this.existInBookmarks = bookmarks.some(
        ({ name }) => name === this.item.name
      );
    });
  }

  back() {
    this.router.navigate([this.routerHistory.sourceUrl || ""], {
      fragment: this.item.name
    });
  }

  performAction() {
    // console.log(this.bookmarkService.removeFromBookmarks(this.item).then(() => console.log('iiii')))
    if (this.existInBookmarks) {
      if(this.bookmarkService.removeFromBookmarks(this.item)){
        this.existInBookmarks = !this.existInBookmarks;
      } else {
        // this.routing.redirectToLogin("Please, enter to continue");
        this.router.navigate(["login"])
      }
    } else {
      if(this.bookmarkService.addToBookmarks(this.item)){
        this.existInBookmarks = !this.existInBookmarks;
      } else {
        // this.routing.redirectToLogin("Please, enter to continue");
        this.router.navigate(["login"])
      }
    }
  }
}
