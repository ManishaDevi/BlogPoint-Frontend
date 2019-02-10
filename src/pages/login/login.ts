import { SignupPage } from './../signup/signup';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController } from 'ionic-angular';
import { UserProvider } from './../../provider/user/user';




@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user: any = {
    userName: ``,
    passWord: ``,
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private userService: UserProvider,  public menuCtrl: MenuController) {
    this.menuCtrl.enable(false, 'myMenu');
  }

  signUp()
  {
    this.navCtrl.push(SignupPage)
  }
  logIn() {
    if (this.user.userName == "" || this.user.passWord == "") {

      alert(`Please fill Username and Password to continue`)
    }
   

    else {
      this.userService.logIn(this.user)
        .subscribe((data: any) => { //:any will accepy any type
          if (data.success) {
            console.log(data.user)
            data.user = data.user.replace(/u'|'\)/g, `'`).replace(/ObjectId\(/g, '').replace(/'/g, `"`)

            this.userService.users = JSON.parse(data.user)
            console.log(this.userService.users._id)
            
            if(this.user.userName == this.userService.users.userName && this.user.passWord ==  this .userService.users.passWord)
            {
              this.navCtrl.setRoot(HomePage)
              this.menuCtrl.enable(true, 'myMenu');
            }
            else
            {
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
