import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  submitted = false;
  status = "password";
  lihat = true;
  status2 = "password";
  lihat2 = true;

  nomor:number;
  name:string;
  email: string;
  password: string;
  password2:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
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

  showPassword2(){
    this.status2 = "text";
    this.lihat2 = false;
    console.log(this.status);
  }

  hidePassword2(){
    this.status2 = "password";
    this.lihat2 = true;
    console.log(this.status);
  }

  signIn() {
    this.navCtrl.push(LoginPage);
  }

  signUp(){
    this.navCtrl.setRoot(HomePage);
  }

}
