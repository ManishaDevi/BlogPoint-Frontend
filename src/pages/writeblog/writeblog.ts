import { HomePage } from './../home/home';
import { UserProvider } from './../../provider/user/user';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-writeblog',
  templateUrl: 'writeblog.html',
})
export class WriteblogPage {
 blogs:any={
  blogHeading:'',
  blogSummary:'',
  blogDescription:'',
  blogType:'',
  userName:''
 }

  constructor(public navCtrl: NavController, public navParams: NavParams, private userService:UserProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WriteblogPage');
  }
  fashion()
   {
     this.blogs.blogType="Fashion" 
     
   }
   travel()
   {
    this.blogs.blogType="Travel"
   }
    
  submitBlog() {
   
    this.blogs.userName=this.userService.users.userName
   
    this.userService.submitBlog(this.blogs)
    
      .subscribe((data: any) => { 
        if (data.success) {
          this.navCtrl.push(HomePage)
        }
        else {
          alert("please write blog")
        }
      })
  
}}
  



