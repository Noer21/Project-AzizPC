import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { Camera } from '@ionic-native/camera';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { Data } from '../provider/data';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { DetailPage } from '../pages/detail/detail';
import { ProfilePage } from '../pages/profile/profile';
import { HistoryPage } from '../pages/history/history';
import { ServicePage } from '../pages/service/service';
import { AddrepairPage } from '../pages/addrepair/addrepair';

import { Http } from '@angular/http';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    DetailPage,
    ProfilePage,
    HistoryPage,
    ServicePage,
    AddrepairPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot(),
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    DetailPage,
    ProfilePage,
    HistoryPage,
    ServicePage,
    AddrepairPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Data

  ]
})
export class AppModule {}
