import { OnInit, AfterViewChecked, ViewChild, ElementRef } from '@angular/core';
import { IRepo } from './interfaces';
import { RepositoryService } from '../project/services/repository.service';
import { ActivatedRoute } from '@angular/router';

export abstract class ListAnchors implements AfterViewChecked {
  @ViewChild('litsContainer', { static: true }) litsContainer: ElementRef;
  constructor( private router: ActivatedRoute) {}

  ngAfterViewChecked(): void {
    this.router.fragment.subscribe((fragment) => {
      const el = this.litsContainer.nativeElement.querySelector('#' + fragment);
    // tslint:disable-next-line:no-unused-expression
      el && el.scrollIntoView();
    });
  }
}
