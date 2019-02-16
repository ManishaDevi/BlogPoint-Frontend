
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from './../../provider/user/user';
import { NativeStorage } from '@ionic-native/native-storage';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  user: any = {
    userName: ``,
    passWord: ``,
    emailId: ``,
    retypePassword: ``
  }

  constructor(
    private nativeStorage: NativeStorage,
    public navCtrl: NavController,
    public navParams: NavParams,
    private userService: UserProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  signUp() {

    if (this.user.userName == "" || this.user.passWord == "" || this.user.emailId == "" || this.user.retypePassword == "") {
      alert(`Please fill all the details`)
    }

    else {
      this.userService.signUp(this.user)
        .subscribe((data: any) => { //:any will accept any type
          if (data.success) {
            this.navCtrl.setRoot(HomePage)
            this.nativeStorage.setItem(`user`, this.user)
          }
          else {
            alert("Please try again after sometime")
          }
        })
    }
  }
}
