import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MapComponent} from '../map/map.component';
import {ContributeMapComponent} from '../contribute-map/contribute-map.component';
import {AboutComponent} from '../about/about.component';

/*
 * This module enables navigation from one view to the next
 */

const appRoutes: Routes = [
  { path: 'game', component: MapComponent},
  { path: '', component: MapComponent},
  { path: 'contribute', component: ContributeMapComponent},
  { path: 'about', component: AboutComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      appRoutes, {enableTracing: true} // TODO: Remove when deliver
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
