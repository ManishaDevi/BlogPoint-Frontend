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
  user:any=[]
  blogs: any = []
  blogType: ``

  constructor(public navCtrl: NavController, private userService: UserProvider, public navParams: NavParams, ) {

  }
  writeBlog() {
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
  blogSelected(blogs:any)
  {
    this.navCtrl.push(BlogpagePage,{blogs})
  }
  logOut()
  {
    console.log("hi")
 this.userService.logOut().subscribe((data: any) => {
  if (data.success) {
    this.navCtrl.push(LoginPage)
  
  }
  else{
    this.navCtrl.push(HomePage)
  }
})}
  }


