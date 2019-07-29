import {Component, Input, OnInit} from '@angular/core';
import {icon, latLng, Map, marker, tileLayer} from 'leaflet';
import {FormControl, FormGroup} from '@angular/forms';
import {MapdataService} from '../services/mapdata.service';

@Component({
  selector: 'app-contribute-map',
  templateUrl: './contribute-map.component.html',
  styleUrls: ['./contribute-map.component.css']
})
export class ContributeMapComponent implements OnInit {
  options: any;
  lat: number;
  lon: number;
  layers: any;
  center: any;
  zoom: any;
  city: string;
  country: string;
  private addArray: Array<any>[];

  validatingForm = new FormGroup({
    formLat: new FormControl('lat'),
    formLon: new FormControl('lon'),
    city: new FormControl('city'),
    country: new FormControl('country')
  });

  constructor(private mapService: MapdataService) {
  }

  ngOnInit() {
    this.options = {
      layers: [
        tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          {attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' })
      ],
      zoom: 3,
      center: latLng(48.266033, 8.350205)
    };
    this.getPosition();
  }

  submit() {
    this.validatingForm.controls.formLat.setValue(this.lat);
    this.validatingForm.controls.formLon.setValue(this.lon);
    this.city = this.validatingForm.controls.city.value;
    this.country = this.validatingForm.controls.country.value;

    const hannes = [this.country, this.city,
      this.lat, this.lon, null, null];
    this.mapService.addToData(hannes);
    alert(this.city + ' in ' + this.country + ' is added to the game!');
    // TODO: Clear fields after submit
  }

  onMapReady(map: Map) {
    map.doubleClickZoom.disable();
    // tslint:disable-next-line:no-shadowed-variable
    map.on('click', <LeafletMouseEvent>(e) => {
      this.lat = e.latlng.lat;
      this.lon = e.latlng.lng;
    });
  }

  updateMarker() {
      this.layers = marker([this.lat, this.lon], {
        // This is necessary because the module hast problems with marker icons
        icon: icon({
          iconSize: [25, 41],
          iconAnchor: [13, 41],
          iconUrl: 'assets/marker-icon.png',
          shadowUrl: 'assets/marker-shadow.png'
        })
      });
  }

  getPosition() {
    // asynchronous
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lon = position.coords.longitude;
        this.center = latLng(this.lat, this.lon);
        this.zoom = 11;
      });
    } else {
      alert('Geolocation is not supported');
    }
  }
}
