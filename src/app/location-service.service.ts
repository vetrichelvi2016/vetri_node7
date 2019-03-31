import { Injectable } from '@angular/core';
import { getParentInjectorLocation } from '../../node_modules/@angular/core/src/render3/di';
import { of,Observable } from '../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationServiceService {

  constructor() { }
  ListLocation = [
    {
      lName:'rea',
      cc:22
    },
    {
      lName:'csk',
      cc:33
    },
    {
      lName:'mks',
      cc:44
    }
  ]
  getLocation(): Observable<any []>{
    return of(this.ListLocation);

  }

}

  