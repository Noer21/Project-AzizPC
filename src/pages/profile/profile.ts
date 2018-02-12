import { EditProfilePage } from './../edit-profile/edit-profile';
import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, App, NavParams, AlertController } from 'ionic-angular';
import { Data } from '../../provider/data';


/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  datas : any;
  nama : string;
  email : string;
  hp : string;
  alamat : string;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public data : Data,
              public alertCtrl : AlertController,
              public app : App  
            ) {
              this.data.getData().then((data) =>{
                this.datas = data;
                this.nama = this.datas.nama;
                this.email = this.datas.email;
                this.hp = this.datas.hp;
                this.alamat = this.datas.alamat;
          
                console.log(this.datas.alamat)
              })             
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }


  logOut(){
    let confirm = this.alertCtrl.create({ 
      title: '', 
      subTitle: 'Apakah kamu yakin ingin keluar?', 
      buttons: [ 
        { 
          text: 'Tidak', 
          handler: () => { 
            console.log('Disagree clicked'); 
          } 
        }, 
        { 
          text: 'Ya', 
          handler: () => { 
            console.log('Agree clicked') 
            // this.navCtrl.setRoot(MyApp); 
            this.data.logout(); 
            this.app.getRootNav().setRoot(LoginPage); 
            // , 
            // this.data.logout(); 
            // this.app.getRootNav().setRoot(MyApp); 
          } 
        } 
      ] 
    }); 
    confirm.present(); 
  }

  editProfil(){
    this.navCtrl.setRoot(EditProfilePage, this.datas)
  }


}
