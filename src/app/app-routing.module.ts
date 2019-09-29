import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesComponent } from './components/articles/articles.component';
import { GrantsComponent } from './components/grants/grants.component';
import { CreateArticleComponent } from './components/create-article/create-article.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: ArticlesComponent },
  { path: 'create-article', component: CreateArticleComponent },
  { path: 'fresh', component: ArticlesComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
