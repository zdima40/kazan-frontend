import { Injectable } from '@angular/core';
import { Article } from '@classtypes/article';
import { ARTICLES } from '../mocks/articles';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ArticleService {

  constructor(private http: HttpClient) { }

  public getArticles(): Article[] {
    return ARTICLES;
  }

  //public getArticle(id: number): Article {}

  public searchArticles(text: string): Article[] {
    const articles: Article[] =  this.getArticles();
    return articles.filter(article => article.title.includes(text));
  }


  createArticle(article: Article): Observable<{id: number}> {
    return this.http.post<{id: number}>('http://127.0.0.1/api/article/create', article);
}
}
