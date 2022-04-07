import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';
import { MapType } from '@angular/compiler';
import { NgModule, LOCALE_ID } from '@angular/core';

import { registerLocaleData } from '@angular/common';
import localEs from '@angular/common/locales/es';
import localFr from '@angular/common/locales/fr';

registerLocaleData(localEs);
registerLocaleData(localFr);


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe:any = {};
  idioma    : string = 'CLP';
  videoUrl: string = "";

  constructor( private activatedRoute: ActivatedRoute,
               private _heroesService: HeroesService
    ){

    this.activatedRoute.params.subscribe( params =>{
        this.heroe = this._heroesService.getHeroe( params['id'] );
    });
  }
}