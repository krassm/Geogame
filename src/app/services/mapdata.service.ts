import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

/*
 * Components shouldn't fetch or save data directly
 * They should focus on presenting data and delegate data access to a service.
 */

export class MapdataService {

  counter = 0;

  constructor() { }

  addToData(input: Array<any>) {
    // console.log('get Location Data in the service is called');
    let storedItem = JSON.stringify(input);
    storedItem = storedItem.replace(/[\[\]"]+/g, '');
    localStorage.setItem(this.counter.toString(), storedItem);
    this.counter += 1;
  }
}
