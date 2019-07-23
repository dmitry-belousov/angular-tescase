import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrendingComponent } from './components/trending/trending.component';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [
  { path: '', component: TrendingComponent, data: { animation: 'TranslateLeft'} },
  { path: ':id', component: DetailsComponent, data: { animation: 'TranslateRight' } },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
