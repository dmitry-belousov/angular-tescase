import { Component, OnInit } from '@angular/core';
import { RepositoryService } from '../../services/repository.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IRepo } from 'src/app/helpers/interfaces';
import { BookmarksService } from 'src/app/services/bookmarks.service';
import { zip } from 'rxjs';
import { uniqBy } from 'src/app/helpers/functions';
import { RouteHistoryService } from 'src/app/services/route-history.service';
import { ToastService } from 'src/app/toasts/services/toast.service';
import { ToastTypes } from 'src/app/toasts/helpers/enums';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
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
    ) { }

  ngOnInit() {
    zip(this.repoService.listSubject, this.bookmarkService.bookmarksSubject)
    .subscribe(([list, bookmarks]) => {
      this.item = uniqBy([...list, ...bookmarks], 'name').find(({ name }) => name === this.route.snapshot.params.id);
      if (!this.item) {
        return this.toastService.show(`can not find item with name: ${this.route.snapshot.params.id}`, { type: ToastTypes.DANGER });
      }
      this.existInBookmarks = bookmarks.some(({ name }) => name === this.item.name);
    });
  }

  back() {
    this.router.navigate([this.routerHistory.sourceUrl || ''], { fragment: this.item.name });
  }

  performAction() {
    this.existInBookmarks
      ? this.bookmarkService.removeFromBookmarks(this.item)
      : this.bookmarkService.addToBookmarks(this.item);
    this.existInBookmarks = !this.existInBookmarks;
  }
}
