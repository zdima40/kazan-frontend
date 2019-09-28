import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesComponent } from './components/articles/articles.component';
import { GrantsComponent } from './components/grants/grants.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: ArticlesComponent },
  { path: 'grants', component: GrantsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
