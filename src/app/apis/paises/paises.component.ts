import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styles: [
  ]
})
export class PaisesComponent implements OnInit {

  paises: any[] = [];
  idpais: string="";

  constructor(private http: HttpClient,
              private router: Router) { 
  }
  ngOnInit(): void {
  }
  buscarPaises( idpais:string){
  
    this.http.get(environment.apiPais + idpais)
              .subscribe( (resp: any) => {
                this.paises = resp;
                console.log(resp);
              });
  }
}
