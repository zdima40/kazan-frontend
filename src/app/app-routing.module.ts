import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesComponent } from './components/articles/articles.component';
import { GrantsComponent } from './components/grants/grants.component';
import { PartnersListComponent } from './components/partners-list/partners-list.component';
import { CreateArticleComponent } from './components/create-article/create-article.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: ArticlesComponent },
  { path: 'fresh', component: GrantsComponent },
  { path: 'partners-list', component: PartnersListComponent },
  { path: 'create-article', component: CreateArticleComponent },
 // { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
