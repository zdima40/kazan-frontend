import { Injectable } from '@angular/core';
import { Article } from '@classtypes/Article';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';


@Injectable()
export class ArticleService {

  constructor(private http: HttpClient) { }

  public getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(`${environment.server}/api/article`);
  }

  //public getArticle(id: number): Article {}

  public searchArticles(text: string): Observable<Article[]> {
    return this.http.get<Article[]>(`${environment.server}/api/article?search=${text}`);
  }

  createArticle(article: Article): Observable<{id: number}> {
    return this.http.post<{id: number}>(`${environment.server}/api/article`, article);
  }
}
