import { HomePage } from './../home/home';
import { UserProvider } from './../../provider/user/user';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html',
})
export class FeedbackPage {
  blogs: any={
    feedbackHeading:'',
    feebackDescription:'',
   
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private userService:UserProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedbackPage');
  }
  submitFeeback()
  {
    this.userService.submitFeeback(this.blogs)
    // this.navCtrl.push(HomePage)
   
  
   
  
}}
