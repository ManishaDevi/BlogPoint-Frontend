import { BlognamePage } from './../blogname/blogname';
import { UserProvider } from './../../provider/user/user';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BlogpagePage } from '../blogpage/blogpage';

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {
  blogs:any=[]
   
    
  blogType:''
 users:any={

 }
 userName:''
  
 

  constructor(public navCtrl: NavController, public navParams: NavParams,public userService:UserProvider) {
  }
  ionViewDidLoad() {
this.userName=this.userService.users.userName

    this.userService.getUserBlog(this.userName).subscribe((data: any) => { 
      
      if(data.success)
      {
      
this.blogs=data.results
// this.users=this.blogs[0]
console.log(this.blogs)
      }
else{
  alert("not correct")
}

  })

} userblogSelected(blogs:any)
{
  this.navCtrl.push(BlognamePage,{blogs})
}
}
