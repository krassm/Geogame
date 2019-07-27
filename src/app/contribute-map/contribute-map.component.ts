import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {icon, latLng, marker, tileLayer, Map, LeafletMouseEvent, LatLng} from 'leaflet';
import {LeafletEventsDemoComponent} from '@asymmetrik/ngx-leaflet/src/demo/app/leaflet/events/events-demo.component';

@Component({
  selector: 'app-contribute-map',
  templateUrl: './contribute-map.component.html',
  styleUrls: ['./contribute-map.component.css']
})
export class ContributeMapComponent implements OnInit {
  role: string;
  options: any;
  lat: number;
  lon: number;
  eventLat: number;
  eventLon: number;
  layers: any;
  center: any;
  zoom: any;
  positionIsSet = false;
  eventPositionIsSet = false;

  constructor(public router: Router) {
    this.role =  this.router.getCurrentNavigation().finalUrl.toString();

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

  setCustomPoint() {
  }

  onMapReady(map: Map) {
    console.log('i repeat and repeat');
    // tslint:disable-next-line:no-shadowed-variable
    map.on('click', <LeafletMouseEvent>(e) => {
      this.eventLat = e.latlng.lat;
      this.eventLon = e.latlng.lng;
      this.eventPositionIsSet = true;
      console.log('Se clicked position: ' + this.eventLat + ' ' + this.eventLon);
    });
  }

  updateMarker() {
    if (this.eventLon !== undefined) {
      console.log('i updated the markker i promise with the following coordinates :');
      this.layers = marker([this.eventLat, this.eventLon], {
        // This is nessasary because the module hast problems with marker icons
        icon: icon({
          iconSize: [25, 41],
          iconAnchor: [13, 41],
          iconUrl: 'assets/marker-icon.png',
          shadowUrl: 'assets/marker-shadow.png'
        })
      });
      this.eventPositionIsSet = false;
    }
  }

  getPosition() {
    // asynchronous
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lon = position.coords.longitude;
        this.center = latLng(this.lat, this.lon);
        this.zoom = 11;
        this.positionIsSet = true;
      });
    } else {
      alert('Geolocation is not supported');
    }
  }

  updateMap() {
    this.layers = marker([this.lat, this.lon], {
      // This is nessasary because the module hast problems with marker icons
      icon: icon({
        iconSize: [25, 41],
        iconAnchor: [13, 41],
        iconUrl: 'assets/marker-icon.png',
        shadowUrl: 'assets/marker-shadow.png'
      })
    });
    this.positionIsSet = false;
   }
}
