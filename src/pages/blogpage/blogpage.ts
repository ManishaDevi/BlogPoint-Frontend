import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../provider/user/user';



@IonicPage()
@Component({
  selector: 'page-blogpage',
  templateUrl: 'blogpage.html',
})
export class BlogpagePage {
blogs:any={}

  constructor(public navCtrl: NavController, public navParams: NavParams,public userService:UserProvider) {
  }

  ionViewDidLoad() {
    this.blogs = this.navParams.get(`blogs`)
    console.log(this.blogs)
    console.log('ionViewDidLoad BlogPage');
  }

}
