import { Component } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Article, SearchService } from 'src/app/app-wiki/pages/search/services/search.service';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.scss']
})
export class WikiComponent {

  articles$ !: Observable<Article[]>;

  constructor(private readonly searchSvc: SearchService) { }

  onSearch(term: string): void {
    this.articles$ = this.searchSvc.search(term);
  }
}