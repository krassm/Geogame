import {Component, OnInit} from '@angular/core';
import {latLng, tileLayer} from 'leaflet';
import * as papa from 'papaparse';
import {HttpClient} from '@angular/common/http';
import {MapdataService} from '../services/mapdata.service';
import {any} from 'codelyzer/util/function';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {
  center: any;
  options: any;
  parsedCSV: Array<any>;
  cityListLength: number;
  rightAnswer: any;
  wrongAnswer1: any;
  wrongAnswer2: any;
  lat: number;
  lon: number;
  answer1: any;
  answer2: any;
  answer3: any;

  constructor(private http: HttpClient, private mapDataService: MapdataService) {
    this.importFromCSV();
    // this.parsedCSV = mapDataService.importFromCSV(); should also be in mapdata.service?
  }

  ngOnInit() {
    window.alert('Are you ready to test your knowledge?');
    // service get called twice i dont know why... every location is added twice
    console.log('The custom data: ' + localStorage.getItem('0'));
    console.log('The custom data: ' + localStorage.getItem('1'));
    console.log('The custom data: ' + localStorage.getItem('2'));

    this.loadData();
    this.addCustomData();

  }

  loadData() {
    this.chooseRandomCity();
    this.randomizeAnswers();
    this.setMapOptions();
  }

  addCustomData() {
    for (let i = 0; i < localStorage.length; i++) {
      const formatted = localStorage.getItem(i.toString());
      console.log('formatted : ' + formatted);
      // tslint:disable-next-line:one-variable-per-declaration
      const mimi = [formatted.substring(0, formatted.length - 1).split(',')];
      console.log('parsedCSV: ' + this.parsedCSV);

      this.parsedCSV.push(mimi);
      console.log('parsedCSV2: ' + this.parsedCSV);

      // console.log('maiami : ' + mimi[0]);
      console.log('TESTETST : ' + this.parsedCSV[4][1]); //that is the last value returned from parsed csv
    }
    console.log('all the values' + this.parsedCSV);
  }

  importFromCSV() {
    // this is asynchronous
    return this.http.get('assets/coordinates/country-capitals.csv', {responseType: 'text'})
      .subscribe((data) => {
        // this.cityListLength = papa.parse(data).data.length - 1;
        // this.cityListLength = papa.parse(data).data.length - 1;
        return this.parsedCSV = papa.parse(data).data;
        // parsedCSV [5] returns vienna and attributes, parsedCSV[5][0] returns Austria as value
      }
    );
  }

  randomizeAnswers() {
    const ranArray: Array<string> = [this.rightAnswer, this.wrongAnswer1, this.wrongAnswer2];
    for (let i = ranArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [ranArray[i], ranArray[j]] = [ranArray[j], ranArray[i]];
    }
    this.answer1 = ranArray[0];
    this.answer2 = ranArray[1];
    this.answer3 = ranArray[2];
  }

  chooseRandomCity() {

    this.cityListLength = this.parsedCSV.length - 1;

    console.log('length: ' + this.cityListLength);
    let rightIndex = Math.floor(Math.random() * this.cityListLength) + 1;
    let wrongIndex1 = Math.floor(Math.random() * this.cityListLength) + 1;
    let wrongIndex2 = Math.floor(Math.random() * this.cityListLength) + 1;

    console.log('wrong index: ' + wrongIndex1 + ' worng index2 : ' + wrongIndex2 + 'riight index: ' + rightIndex);

    while (rightIndex === wrongIndex1 || rightIndex === wrongIndex2 || wrongIndex1 === wrongIndex2) {
      rightIndex = Math.floor(Math.random() * this.cityListLength) + 1;
      wrongIndex1 = Math.floor(Math.random() * this.cityListLength) + 1;
      wrongIndex2 = Math.floor(Math.random() * this.cityListLength) + 1;
    }
    this.rightAnswer = this.parsedCSV[rightIndex][1];
    this.wrongAnswer1 = this.parsedCSV[wrongIndex1][1];
    this.wrongAnswer2 = this.parsedCSV[wrongIndex2][1];
    console.log('this is the right index ' + this.parsedCSV[rightIndex][1]);

    this.lat = this.parsedCSV[rightIndex][2];
    this.lon = this.parsedCSV[rightIndex][3];
  }

  setMapOptions() {
    console.log('the right answer is: ' + this.rightAnswer);
    this.center = latLng(this.lat, this.lon);
    // map options are only set once
    if (!this.options) {
      this.options = {
        layers: [
          tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
            { maxZoom: 11, minZoom: 11, attribution: 'Tiles &copy; Esri &mdash; Source: Esri' })
        ],
        zoomControl: false,
        zoom: 11,
        center: latLng(this.lat, this.lon)
        // TODO: a scale would be nice
      };
    }
  }

  checkForAnswer() {
    if (document.activeElement.textContent === this.rightAnswer) {
      window.alert('You guess write! congrats');
    } else {
      window.alert('That was wrong :( The right answer would be: ' + this.rightAnswer);
    }
    // TODO: fancy alert box
    this.loadData();
  }
}
