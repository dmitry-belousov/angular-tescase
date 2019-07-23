import { Injectable } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { filter, pairwise } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RouteHistoryService {
  public sourceUrl: string;
  constructor(private router: Router) {
    this.router.events.pipe(filter(event => event instanceof RoutesRecognized), pairwise())
      .subscribe((e: any) => {
        this.sourceUrl = e[0].url.split('#')[0].slice(1);
      });
  }
}
