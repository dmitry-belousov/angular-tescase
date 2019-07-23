import { Component, OnInit, Renderer2, ElementRef, Inject, AfterViewChecked, ViewChild } from '@angular/core';
import { RepositoryService } from '../../services/repository.service';
import { IRepo } from 'src/app/helpers/interfaces';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { ListAnchors } from 'src/app/helpers/abstracts';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})
export class TrendingComponent extends ListAnchors implements OnInit {
  public listRepos: Array<IRepo> = [];
  public loading = false;
  constructor(
    private repoService: RepositoryService,
    router: ActivatedRoute) {
      super(router);
    }

  ngOnInit() {
    this.performPreloader();
    this.repoService.listSubject.subscribe((data) => {
      this.listRepos = data;
      this.performPreloader();
    });
  }

  private performPreloader() {
    this.loading = !this.loading;
  }
}
