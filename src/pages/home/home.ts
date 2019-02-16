import { Platform } from 'ionic-angular';
// import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { NativeStorage } from '@ionic-native/native-storage';
import { UserProvider } from './../../provider/user/user';
import { WriteblogPage } from './../writeblog/writeblog';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BlogpagePage } from '../blogpage/blogpage';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user: any = []
  blogs: any = []
  blogType: ``

  constructor(private platform: Platform, private nativeStorage: NativeStorage, public navCtrl: NavController, private userService: UserProvider, public navParams: NavParams, ) {

  }

  writeBlog() {
    console.log("inside write blog")
    this.navCtrl.push(WriteblogPage)
  }

  ionViewDidLoad() {


    this.userService.getBlog(this.blogType).subscribe((data: any) => {
      if (data.success) {
        this.blogs = data.results
      }
      else {
        alert(`please write blog`)
        this.navCtrl.push(WriteblogPage)
      }
    })


    console.log('ionViewDidLoad BlogListPage');

  }

  blogSelected(blogs: any) {
    this.navCtrl.push(BlogpagePage, { blogs })
  }

  logOut() {
    this.nativeStorage.clear()
    this.navCtrl.setRoot(LoginPage)
  }
}


