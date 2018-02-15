import { Data } from './../../provider/data';
import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

import { DetailPage } from '../detail/detail';
import { AddrepairPage } from '../addrepair/addrepair';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  datas : any;
  submitted : boolean =false;
  dataku : any;
  id : string;
  servisan:any = [];

  constructor(public navCtrl: NavController,
              public http : Http,
              public data : Data,
              public loadCtrl :LoadingController
  ) {
    this.getData();
  }

  detail() {
    this.navCtrl.push(DetailPage);
  }

  add(){
    this.navCtrl.push(AddrepairPage);
  }

  getData(){
    this.submitted = true;
    let loading = this.loadCtrl.create({
        content: 'Tunggu sebentar...'
    });
    loading.present();
    this.http.get(this.data.link_hosting+"getPesanan.php").subscribe(data =>{
      loading.dismiss();
      let response = data.json(); 
      console.log(response);
      if(response.status == 200){
        let datas=response.data;
        this.datas = datas;
        console.log(this.datas);
        this.binding();
        // this.navCtrl.setRoot(HomePage);
      } 
    })
  }

  binding(){
    this.data.getData().then((data) =>{
      this.dataku = data;
      this.id = this.dataku.id;
      this.servisan = [];
      for(var i = 0, j= 0; i < this.datas.length;i++){
        if(this.id == this.datas[i].customer_id){
            this.servisan[j] = this.datas[i];
            j++;
        }
      }
    })             
  }


}
