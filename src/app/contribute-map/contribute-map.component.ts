import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {latLng, tileLayer} from 'leaflet';

@Component({
  selector: 'app-contribute-map',
  templateUrl: './contribute-map.component.html',
  styleUrls: ['./contribute-map.component.css']
})
export class ContributeMapComponent implements OnInit {
  role: string;
  options: any;


  constructor(public router: Router) {
    this.role =  this.router.getCurrentNavigation().finalUrl.toString();
  }

  ngOnInit() {
    this.options = {
      layers: [
        tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
          {attribution: 'Tiles &copy; Esri &mdash; Source: Esri' })
      ],
      zoomControl: false,
      zoom: 5,
      center: latLng(0, 0)
    };
  }

}
