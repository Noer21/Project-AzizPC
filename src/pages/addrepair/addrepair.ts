import { HomePage } from './../home/home';
import { Data } from './../../provider/data';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, ToastController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { NgForm } from '@angular/forms';
import { Http } from '@angular/http';



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
  
  namaBarang : string;
  charger : boolean = false;
  mouse : boolean = false;
  mushrooms : boolean = false;
  cd : boolean = false;
  gaming : string;
  keluhan : string;
  alamat : string;
  id : string;
  datas : any;
  service : string;
  services : string;

  submitted = false;

  constructor(public alertCtrl: AlertController, 
              private camera: Camera, 
              public navCtrl: NavController, 
              public navParams: NavParams,
              public loadCtrl : LoadingController,
              public http: Http,     
              public data: Data,
              public toastCtrl: ToastController         
            ) {
              this.data.getData().then((data) =>{
                this.datas = data;
                this.id = this.datas.id;
              }) 
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

  repair(form : NgForm){
    this.submitted = true;
    let loading = this.loadCtrl.create({
        content: 'Tunggu sebentar...'
    });

    if(form.valid){
      console.log(this.namaBarang);
      console.log(this.id);
      console.log(this.keluhan);
      console.log(this.service[0]);
      console.log(this.alamat);
      loading.present();

      let kelengkapan = 'charger = '+this.charger + '\n' +  
                         'mouse = '+ this.mouse + '\n' + 
                         'mushrooms = '+ this.mushrooms + '\n' +
                         'cd = '+this.cd;

      // let services = this.service[0] + ',' + this.service[1] + this.service[2] + this.service[3] + this.service[4] + this.service[5] + this.service[6] + this.service[7] + this.service[]
      console.log(kelengkapan);
      // console.log(services);

      // for(var j=0, i = 0; i< this.service.length-1; i+2){
      //     if(i+2 < this.service.length-1)
      //      this.services  = this.service[i] + ', ' + this.service[i+1];
      // }

      console.log(this.services);

      let input = JSON.stringify({
        id_Customer : this.id, 
        namaBarang : this.namaBarang,
        keluhan : this.keluhan,
        kelengkapan : kelengkapan,
        service : kelengkapan,
        alamat : this.alamat
      });

      this.http.post(this.data.link_local+"addRepair.php", input).subscribe(data =>{
        loading.dismiss();
        let response = data.json();
        console.log(response);
        if(response.status == 200){
          let datas=response.data;
          console.log(datas);
          this.navCtrl.setRoot(HomePage);
          
        }
        this.showAlert1(response.message);
          }, err => {
          loading.dismiss();
          this.showError(err);
          });

    }
  }
  showError(err: any){
    err.status==0?
    this.showAlert1("Tidak ada koneksi. Cek kembali sambungan Internet perangkat Anda"):
    this.showAlert1("Tidak dapat menyambungkan ke server. Mohon muat kembali halaman ini");
  }
  showAlert1(message){
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

}
  