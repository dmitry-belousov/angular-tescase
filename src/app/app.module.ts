import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { BookmarksComponent } from './components/bookmarks/bookmarks.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './components/main/main.component';
import { BookmarkCounterComponent } from './components/bookmark-counter/bookmark-counter.component';
import { ToastsModule } from './toasts/toasts.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BookmarksComponent,
    MainComponent,
    BookmarkCounterComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
