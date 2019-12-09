import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookmarksComponent } from './components/bookmarks/bookmarks.component';
import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [
  { path: 'projects', loadChildren: './project/project.module#ProjectModule' },
  { path: 'bookmarks', component: BookmarksComponent, data: { animation: 'TranslateLeft' } },
  { path: 'register', component: RegisterComponent, data: { animation: 'TranslateLeft' } },
  { path: '**', redirectTo: 'projects' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
