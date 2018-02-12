import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DetailPage } from '../detail/detail';
import { AddrepairPage } from '../addrepair/addrepair';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  datas : any;

  constructor(public navCtrl: NavController) {

  }

  detail() {
    this.navCtrl.push(DetailPage);
  }

  add(){
    this.navCtrl.push(AddrepairPage);
  }


}
