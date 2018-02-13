import { Data } from '../../provider/data';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';
import { NgForm } from '@angular/forms';
import { Http } from '@angular/http';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  // user: {nama?: string, email?: string, password?: string, role?:string, hp?:string} = {};  
  
  submitted = false;
  status = "password";
  lihat = true;
  
  email: string;
  password: string;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public loadCtrl : LoadingController,
              public http : Http,
              public data : Data,
              public toastCtrl : ToastController
            ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  sign(form : NgForm){
    this.submitted = true;
    let loading = this.loadCtrl.create({
        content: 'Tunggu sebentar...'
    });
    console.log(this.email);
    if(form.valid){
      loading.present();
      let input = JSON.stringify({
        email : this.email,
        password : this.password
      });
      this.http.post("http://127.0.0.1/AzisPc/BackEnd/login.php",input).subscribe(data =>{
        let response = data.json();
        if(response.status == 200){
          let user = response.data;
          console.log(user);
          this.data.login(user);
          this.navCtrl.setRoot(HomePage);
          loading.dismiss();          
        }
        this.showAlert(response.message);        
      })
    }
  }


  showPassword(){
    this.status = "text";
    this.lihat = false;
    console.log(this.status);
  }

  hidePassword(){
    this.status = "password";
    this.lihat = true;
    console.log(this.status);
  }

  Register() {
    this.navCtrl.push(RegisterPage);
  }

  showAlert(message){
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

  signUp(){
    this.navCtrl.setRoot(RegisterPage);
  }

  skip(){
    this.navCtrl.setRoot(HomePage);
  }



}
