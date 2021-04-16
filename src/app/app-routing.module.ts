import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ShowsComponent} from './components/shows/shows.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: ShowsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
