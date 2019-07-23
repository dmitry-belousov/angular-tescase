import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './project-routing.module';
import { TrendingComponent } from './components/trending/trending.component';
import { DetailsComponent } from './components/details/details.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { UserComponent } from './components/user/user.component';

library.add(fas, far, fab);

@NgModule({
  declarations: [TrendingComponent, DetailsComponent, UserComponent],
  imports: [
    SharedModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
  ]
})
export class ProjectModule { }
