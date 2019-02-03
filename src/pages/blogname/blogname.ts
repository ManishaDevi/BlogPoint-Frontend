
import { ListPage } from './../list/list';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, AlertController } from 'ionic-angular';
import { UserPage } from '../user/user';
import { UserProvider } from '../../provider/user/user';



@IonicPage()
@Component({
  selector: 'page-blogname',
  templateUrl: 'blogname.html',
})
export class BlognamePage {

  blogs: any = {
    blogHeading: '',
  }
  delete() { };
  deleteconfirm() { };

  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetController: ActionSheetController, public userService: UserProvider, public alertController: AlertController) {
  }

  async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({


      message: 'Are you sure',
      buttons: [
        {
          text: 'Cancel',
        },
        {
          text: 'Delete',
          handler: () => {
            this.deleteconfirm()
            {
              this.userService.deleteBlog(this.blogs)
                .subscribe((data: any) => {
                  if (data.success) {
                    console.log("Deleting Blog")
                    this.navCtrl.push(UserPage)
                  }
                  else {
                    console.log("Something went wrong.Please try again after sometime")
                  }
                })
            }
          }
        }]
    });
    await alert.present();
  }


  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({

      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',

        handler: () => {
          this.delete()
          {
            this.presentAlertMultipleButtons();

          }
          console.log('Delete clicked');
        }
      },
      {
        text: 'Share on Whatsapp',
        icon: 'logo-whatsapp',
        role: 'share on whatsapp',
        handler: () => {

          console.log('Whatsapp share clicked');
        }
      },

      {
        text: 'Share on Facebook',
        icon: 'logo-facebook',
        role: 'share on facebook',
        handler: () => {
          console.log('Facebook share clicked');
        }
      },
      {
        text: 'Edit',
        icon: 'create',
        role: 'edit',
        handler: () => {
          console.log('Edit clicked');
        }
      },

      {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }


      }]
    });
    await actionSheet.present();
  }
  ionViewDidLoad() {
    this.blogs = this.navParams.get(`blogs`)
    console.log(this.blogs)
    console.log('ionViewDidLoad BlognamePage');
  }
}
