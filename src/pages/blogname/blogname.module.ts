import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BlognamePage } from './blogname';

@NgModule({
  declarations: [
    BlognamePage,
  ],
  imports: [
    IonicPageModule.forChild(BlognamePage),
  ],
})
export class BlognamePageModule {}
