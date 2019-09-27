import { Injectable } from '@angular/core';
import { Article } from '../types/article';
import { ARTICLES } from '../mocks/articles';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }

  public getArticles(): Article[] {
    return ARTICLES;
  }

  public getArticle(id: number): Article {}

  public searchArticles(text: string): Article[] {
    const articles: Article[] =  this.getArticles();
    return articles.filter(article => article.title.includes(text));
  }
}