import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/types/article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  public articles: Article[];

  public constructor(private articleService: ArticleService) { }

  public ngOnInit() {
    this.getArticles();
  }

  private getArticles() {
    this.articles = this.articleService.getArticles();
    console.log('articles', this.articles);
  }
}
