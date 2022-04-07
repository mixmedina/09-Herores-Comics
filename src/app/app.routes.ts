
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./component/home/home.component";
import { HeroesComponent } from "./component/heroes/heroes.component";
import { AboutComponent } from "./component/about/about.component";
import { HeroeComponent } from './component/heroe/heroe.component';
import { BuscadorComponent } from "./component/buscador/buscador.component";
import { Error404Component } from "./component/error404/error404.component";
import { PaisesComponent } from "./apis/paises/paises.component";
import { WikiComponent } from './app-wiki/pages/wiki/wiki.component';


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'heroes', component: HeroesComponent},
    { path: 'heroe/:id', component: HeroeComponent },
    { path: 'buscar/:termino', component: BuscadorComponent},
    { path: 'paises', component: PaisesComponent},
    { path: 'error', component: Error404Component},
    { path: 'wiki', component: WikiComponent},

    //si no se encuentra la ruta o archivo se va por defecto a la que se redireccione en los **
    { path: '**', pathMatch: 'full', redirectTo: 'error' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES,{useHash:true});