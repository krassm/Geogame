import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    LeafletModule.forRoot()
  ]
})
export class AppLeafletModule {

}

//  Not Using Typescript (component)?
//  You brave soul. The code is exported using UMD.
//  The bundles are generated as part of the build (npm run build) and placed into the ./dist dir.
//  You should be able to import is using whatever module system/builder you're using, even if you aren't using Typescript.
