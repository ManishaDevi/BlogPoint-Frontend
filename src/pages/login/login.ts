import { SignupPage } from './../signup/signup';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { UserProvider } from './../../provider/user/user';
import { NativeStorage } from '@ionic-native/native-storage';




@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  isLoginScreen: boolean = false;;
  user: any = {
    userName: ``,
    passWord: ``,
  }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private userService: UserProvider,
    private nativeStorage: NativeStorage,
    public menuCtrl: MenuController) {
    this.menuCtrl.enable(false, 'myMenu');
    this.nativeStorage.getItem(`user`).then(data => {
      console.log('data: ', data);
      if (data) {
        this.navCtrl.setRoot(HomePage)
        this.menuCtrl.enable(true, 'myMenu');
      }
    }).catch(error => {
      console.log('error: ', error);
      this.isLoginScreen = true
    })
  }

  signUp() {
    this.navCtrl.push(SignupPage)
  }

  logIn() {
    if (this.user.userName == "" || this.user.passWord == "") {
      alert(`Please fill Username and Password to continue`)
    } else {
      this.userService.logIn(this.user)
        .subscribe((data: any) => { //:any will accepy any type
          if (data.success) {
            console.log(data.user)
            data.user = data.user.replace(/u'|'\)/g, `'`).replace(/ObjectId\(/g, '').replace(/'/g, `"`)

            this.userService.users = JSON.parse(data.user)
            console.log(this.userService.users._id)

            if (this.user.userName == this.userService.users.userName && this.user.passWord == this.userService.users.passWord) {
              this.navCtrl.setRoot(HomePage)
              this.menuCtrl.enable(true, 'myMenu');
              this.nativeStorage.setItem(`user`, this.user)
            }
            else {
              alert("username and password is not correct")
            }
          }
          else {
            alert("User doesn't exist,Please Sign up first")
            // this.user.userName="";
            // this.user.passWord="";
            this.navCtrl.push(SignupPage)

          }
        })
    }
  }
}
