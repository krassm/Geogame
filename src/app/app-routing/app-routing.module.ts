import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MapComponent} from '../map/map.component';
import {LoginComponent} from '../login/login.component';
import {ContributeMapComponent} from '../contribute-map/contribute-map.component';
import {AboutComponent} from '../about/about.component';


const appRoutes: Routes = [
  { path: 'game', component: MapComponent},
  { path: '', component: MapComponent},
  { path: 'contribute', component: LoginComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contribute/contributor', component: ContributeMapComponent},
  { path: 'contribute/maintainer', component: ContributeMapComponent}
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
