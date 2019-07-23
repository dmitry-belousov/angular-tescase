import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'star'
})
export class StarPipe implements PipeTransform {
  constructor(private dom: DomSanitizer) {}
  transform(value: any): any {
    return this.dom.bypassSecurityTrustHtml(`<i class="fa fa-star" aria-hidden="true"> ${value}</i>`);
  }
}
