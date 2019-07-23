import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TileComponent } from './tile/tile.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { PreloaderComponent } from './preloader/preloader.component';
import { StarPipe } from './pipes/star.pipe';

library.add(fas, far, fab);

@NgModule({
  declarations: [TileComponent, PreloaderComponent, StarPipe],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  exports: [TileComponent, PreloaderComponent, StarPipe]
})
export class SharedModule { }
