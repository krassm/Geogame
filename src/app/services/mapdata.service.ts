import { Injectable } from '@angular/core';
import * as papa from 'papaparse';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {any} from 'codelyzer/util/function';

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
    console.log('get Location Data in the service is called');
    const hannes = JSON.stringify(input);

    localStorage.setItem(this.counter.toString(), hannes);
    console.log('here is hannes: ' + hannes + ' ' + this.counter.toString());
    this.counter += 1;
  }
}
