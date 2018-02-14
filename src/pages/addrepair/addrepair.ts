import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

/**
 * Generated class for the AddrepairPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-addrepair',
  templateUrl: 'addrepair.html',
})
export class AddrepairPage {
  public photos: any;
  public base64Image: string;

  constructor(public alertCtrl: AlertController, private camera: Camera, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddrepairPage');
  }

  ngOnInit(){
    this.photos = [];
  }

  takePhoto(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
      this.photos.push(this.base64Image);
      this.photos.revese();  
    }, (err) => {
     // Handle error
    });
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Gagal',
      subTitle: 'Gagal mengambil gambar',
      buttons: ['OK']
    });
    alert.present();
  }

  foto(){
    let confirm = this.alertCtrl.create({ 
      title: 'Unggah gambar', 
      subTitle: 'Pilih sumber gambar', 
      buttons: [ 
        { 
          text: 'Camera', 
          handler: () => { 
            this.takePhoto(); 
          } 
        }, 
        { 
          text: 'Galery', 
          handler: () => { 
            
          } 
        } 
      ] 
    }); 
    confirm.present(); 
  }

}
  