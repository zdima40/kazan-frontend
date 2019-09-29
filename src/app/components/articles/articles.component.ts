import { Component, OnInit } from '@angular/core';
import { ArticleService } from '@services/article.service';
import { Article } from '@classtypes/Article';


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
    this.articleService.getArticles().subscribe(
      articles => this.articles = articles
    );
  }
}
