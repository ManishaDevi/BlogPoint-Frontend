import { BlogpagePage } from './../pages/blogpage/blogpage';
import { HomePage } from './../pages/home/home';
import { WriteblogPage } from './../pages/writeblog/writeblog';
import { FeedbackPage } from './../pages/feedback/feedback';
import { PasswordPage } from './../pages/password/password';

import { BlognamePage } from './../pages/blogname/blogname';
import { LoginPage } from './../pages/login/login';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { ListPage } from '../pages/list/list';
import { UserPage } from '../pages/user/user';
import { SignupPage } from '../pages/signup/signup';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();


    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'MyAccount', component: UserPage },
      { title: 'Password', component: PasswordPage },
      { title: 'Feedback', component: FeedbackPage }
      
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}
