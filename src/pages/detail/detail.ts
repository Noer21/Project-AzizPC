import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  disableButton = true;
  jemput = true;
  diagnosa = true;
  konfirmasi = true;
  reparasi = false;
  selesai = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  Terima() {
    let confirm = this.alertCtrl.create({
      title: 'Terima',
      message: 'Apakah anda yakin menerima reparasi dengan biaya sejumlah : duid? Barang yang telah dikonformasi tidak dapat dibatalkan.',
      buttons: [
        {
          text: 'Ya',
          handler: () => {
            console.log('Agree clicked');
          }
        },
        {
          text: 'Tidak',
          handler: () => {
            console.log('Disagree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

  Batal() {
    let confirm = this.alertCtrl.create({
      title: 'Batal',
      message: 'Apakah anda yakin ingin membatalkan reparasi?',
      buttons: [
        {
          text: 'Ya',
          handler: () => {
            console.log('Agree clicked');
          }
        },
        {
          text: 'Tidak',
          handler: () => {
            console.log('Disagree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
