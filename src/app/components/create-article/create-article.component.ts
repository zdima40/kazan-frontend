import { Component, OnInit } from '@angular/core';
import { Article } from '@classtypes/Article';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss']
})

export class CreateArticleComponent implements OnInit {
      name: string;
      title: string;
      body: string;
      community: string;
      article: Article = {
      id: 4,
      title: 'Введите название',
      body: 'Расскажите историю',
      date: new Date(),
      author: 'Вы',
      rating: 0,
      community: 'Молодая гвардия'
    };

  constructor() { }

  ngOnInit() {
  }

}
