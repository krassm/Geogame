import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MapComponent} from './map/map.component';
import {NavbarModule} from 'angular-bootstrap-md';
import {NavigationComponent} from './navigation/navigation.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {LeafletModule} from '@asymmetrik/ngx-leaflet/src/leaflet/leaflet.module';
import {PapaParseModule} from 'ngx-papaparse';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ContributeMapComponent } from './contribute-map/contribute-map.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    NavigationComponent,
    LoginComponent,
    ContributeMapComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    NavbarModule,
    AppRoutingModule,
    LeafletModule.forRoot(),
    PapaParseModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
