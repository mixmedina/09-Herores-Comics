import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';
//clase que se debe importar para trabajar con la redirección entre páginas
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
/*export class HeroesComponent implements OnInit {

  //declarar arreglo para cargar los heroes
  heroes:Heroe[] = [];

  constructor( private _heroesService: HeroesService,
                private router:Router

  ) { }

  ngOnInit(): void {

      this.heroes = this._heroesService.getHeroes();

      console.log(this.heroes);

  }

  //funcion creada para recibir el parámetro del arreglo que contiene el id del personaje que se va a mostrar
  //se debe importar la clase router e inicializarla
  verHeroe( idx:number)
  {
      this.router.navigate(['/heroe', idx])
    //console.log(idx);
  }

}*/

export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];

  constructor( private _heroesService:HeroesService,
               private router:Router
                ) {
  }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
    console.log( this.heroes );
  }

  verHeroe( idx:number ){
    this.router.navigate( ['/heroe',idx] );
  }

}
