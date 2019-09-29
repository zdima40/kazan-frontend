import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { ArticleComponent } from './components/articles/article/article.component';
import { HeaderComponent } from './components/header/header.component';
import { GrantsComponent } from './components/grants/grants.component';
import { CreateArticleComponent } from './components/create-article/create-article.component';
import { PartnersListComponent } from './components/partners-list/partners-list.component';

import { ArticleService } from './services/article.service';
import { CreateArticleService } from '@services/create-article.service';
import { PartnerCardService } from '@services/partner-card.service';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    ArticleComponent,
    HeaderComponent,
    GrantsComponent,
    CreateArticleComponent,
    PartnersListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [
    ArticleService,
    CreateArticleService,
    PartnerCardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
