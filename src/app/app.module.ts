
import { FeedbackPage } from './../pages/feedback/feedback';
import { RlTagInputModule } from 'angular2-tag-input';
import { WriteblogPage } from './../pages/writeblog/writeblog';
import { BlognamePage } from './../pages/blogname/blogname';
import { UserProvider } from './../provider/user/user';
import { LoginPage } from './../pages/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { HttpClientModule } from '@angular/common/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UserPage } from '../pages/user/user';
import { SignupPage } from '../pages/signup/signup';
import { PasswordPage } from '../pages/password/password';
import { BlogpagePage } from '../pages/blogpage/blogpage';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    UserPage,
    SignupPage,
    LoginPage,
    BlognamePage,
    WriteblogPage,
    PasswordPage,
    FeedbackPage,
    BlogpagePage
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    RlTagInputModule
  
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    UserPage,
    SignupPage,
    LoginPage,
    BlognamePage,
    WriteblogPage,
    FeedbackPage,
    PasswordPage,
    BlogpagePage
  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider
  ]
})
export class AppModule {}
