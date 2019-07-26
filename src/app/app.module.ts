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

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    NavbarModule,
    AppRoutingModule,
    LeafletModule.forRoot(),
    PapaParseModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
