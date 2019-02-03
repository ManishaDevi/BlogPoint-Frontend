import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../provider/user/user';



@IonicPage()
@Component({
  selector: 'page-password',
  templateUrl: 'password.html',
})
export class PasswordPage {
user:any={
passWord:'',
newPassword:''

}
  constructor(public navCtrl: NavController, public navParams: NavParams,public userService:UserProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PasswordPage');
  }
  updatePassword()
  {
    // if(this.user.newPassword.length!=this.user.newPasswordAgain.length)
    // {
    //   alert("passwords doesn't match")
    // }
    // else{
    this.userService.updatePassword(this.user).subscribe((data: any)=> {
    if (data.success) {
      alert("Password updated successfully")
      this.navCtrl.push(HomePage)
    }

    else {
  alert("Please try again after sometime")
  
}
})


}
}
