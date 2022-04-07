import { BrowserModule } from '@angular/platform-browser';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule, FormControl} from '@angular/forms';

//Rutas
import { APP_ROUTING } from './app.routes';

//servicios
import { HeroesService } from './services/heroes.service';
import { ApiPaisesService } from './services/api-paises.service';


//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/shared/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { HeroesComponent } from './component/heroes/heroes.component';
import { HeroeComponent } from './component/heroe/heroe.component';
import { BuscadorComponent } from './component/buscador/buscador.component';
import { HeroeTarjetaComponent } from './component/heroe-tarjeta/heroe-tarjeta.component';
import { Error404Component } from './component/error404/error404.component';
import { HttpClientModule } from '@angular/common/http';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { PaisesComponent } from './apis/paises/paises.component';
import { WikiComponent } from './app-wiki/pages/wiki/wiki.component';
import { ArticleModule } from './app-wiki/pages/article/article.module';
import { SearchModule } from './app-wiki/pages/search/search.module';

export function HttpLoaderFactory(http: HttpClient)
{
  return new TranslateHttpLoader(http);
}


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    BuscadorComponent,
    HeroeTarjetaComponent,
    Error404Component,
    DomseguroPipe,
    PaisesComponent,
    AppComponent
  ],
  imports: [
    APP_ROUTING,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ArticleModule,
    SearchModule
  ],
  providers: [
    HeroesService,
    ApiPaisesService,
    {provide: LOCALE_ID,
    useValue: 'es'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
