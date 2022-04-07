import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {
  [x: string]: any;

  heroes:any[] = []
  termino: string = "";

  constructor( private activatedRoute:ActivatedRoute,
              private _heroesService: HeroesService,
              private router: Router) {

  }
  verHeroe( idx:number ){
    this.router.navigate( ['/heroe',idx] );
    console.log(idx);
  }

  ngOnInit() {

    this.activatedRoute.params.subscribe( params =>{
      this.termino =params['termino'];
      this.heroes = this._heroesService.buscarHeroes( params['termino'] );
      console.log( this.heroes );
    });

  }

}
