import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ArticleModule } from '../article/article.module';
import { WikiComponent } from '../wiki/wiki.component';

@NgModule({
  declarations: [
    SearchComponent,
    WikiComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ArticleModule

  ],
  exports: [
    SearchComponent
  ]
})
export class SearchModule { }
