import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroserviceService {

  constructor() { }

  heros = [
    {
    name: 'vikraman',
    age: 25
  },
  {
    name: 'saro',
    age: 26
  }
];


  getHeroes(): Observable<any []> {
    // TODO: send the message _after_ fetching the hero
    return of(this.heros);
  }

}
