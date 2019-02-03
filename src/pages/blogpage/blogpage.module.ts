import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BlogpagePage } from './blogpage';

@NgModule({
  declarations: [
    BlogpagePage,
  ],
  imports: [
    IonicPageModule.forChild(BlogpagePage),
  ],
})
export class BlogpagePageModule {}
