import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiPaisesService {
  
  paises: any[] = [];
  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {
  }

  obtenerPaises(_url: string) {

   return this.http.get(_url)
              .subscribe( (resp: any) => {
                this.paises = resp;
                console.log(resp);
                console.log('pasé por acá');
                console.log(this.paises);
              });
  }
}
