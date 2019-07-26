import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MapComponent} from '../map/map.component';


const appRoutes: Routes = [
  { path: 'game', component: MapComponent},
  { path: 'contribute', component: MapComponent},
  { path: 'about', component: MapComponent},
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
