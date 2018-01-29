webpackJsonp([7],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddrepairPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AddrepairPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddrepairPage = (function () {
    function AddrepairPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AddrepairPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddrepairPage');
    };
    AddrepairPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addrepair',template:/*ion-inline-start:"D:\Project\List\Project-AzizPC\src\pages\addrepair\addrepair.html"*/'<!--\n  Generated template for the AddrepairPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Tambah Service</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <h5 class="head"> Nama Barang</h5>\n    <ion-item>\n      <ion-input type="text" placeholder="Ex. Laptop Asus ROG Gx600"></ion-input>\n    </ion-item>\n\n    <h5 class="head"> Nama Barang</h5>\n    <ion-item>\n      <ion-textarea placeholder="Keluhan Ananda"></ion-textarea>\n    </ion-item>\n\n    <h5 class="head"> Kelengkapan Barang</h5>\n    <ion-list>\n      <ion-item>\n        <ion-label>Charger</ion-label>\n        <ion-checkbox [(ngModel)]="charger"></ion-checkbox>\n      </ion-item>\n      <ion-item>\n         <ion-label>Maouse</ion-label>\n        <ion-checkbox [(ngModel)]="Mouse"></ion-checkbox>\n      </ion-item>\n      <ion-item>\n        <ion-label>Tas</ion-label>\n        <ion-checkbox [(ngModel)]="mushrooms"></ion-checkbox>\n      </ion-item>\n      <ion-item>\n        <ion-label>CD/Driver</ion-label>\n        <ion-checkbox [(ngModel)]="CD/Driver"></ion-checkbox>\n      </ion-item>\n    </ion-list>\n\n    <h5 class="head">Jenis Service </h5>\n    <ion-item>\n        <ion-label>Jenis Service</ion-label>\n        <ion-select [(ngModel)]="gaming" multiple="true">\n          <ion-option value="1">Install Ulang OS</ion-option>\n          <ion-option value="2">HDD Bad Sector</ion-option>\n          <ion-option value="3">Recovery Data</ion-option>\n          <ion-option value="4">Ganti HDD/LED/LCD</ion-option>\n          <ion-option value="5">Upgrade Memory</ion-option>\n          <ion-option value="6">Mati Total</ion-option>\n          <ion-option value="7">Blue Screen</ion-option>\n          <ion-option value="8">Membersihkan Laptop/NB/PC</ion-option>\n          <ion-option value="9">Ganti Fan</ion-option>\n          <ion-option value="10">Ganti Mainboard/Keybiard/Casing</ion-option>\n          <ion-option value="11">Service Panggilan</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <h5 class="head">Alamat Penjemputan</h5>\n      <ion-item>\n        <ion-input type="text" placeholder="Ex. IPB dramaga"></ion-input>\n      </ion-item>\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\Project\List\Project-AzizPC\src\pages\addrepair\addrepair.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AddrepairPage);
    return AddrepairPage;
}());

//# sourceMappingURL=addrepair.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailPage = (function () {
    function DetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.disableButton = true;
    }
    DetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailPage');
    };
    DetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detail',template:/*ion-inline-start:"D:\Project\List\Project-AzizPC\src\pages\detail\detail.html"*/'<!--\n  Generated template for the DetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>detail</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <img src="assets/imgs/rusak.jpeg"/><br/>\n  <div padding>\n    <h2 class="judul"> Deskripsi </h2>\n      <div class="row">\n        <div col-4>Nama Barang</div>\n        <div col-1>:</div>\n        <div col-7>Lenovo Yoga</div>\n      </div>\n      <div class="row">\n        <div col-4>Nomor Telepon</div>\n        <div col-1>:</div>\n        <div col-7>09888888888</div>\n      </div>\n      <div class="row">\n        <div col-4>Tanggal Masuk</div>\n        <div col-1>:</div>\n        <div col-7>25 Desember 2017</div>\n      </div>\n      <div class="row">\n        <div col-4>Tanggal Selesai</div>\n        <div col-1>:</div>\n        <div col-7>-</div>\n      </div>\n      <div class="row">\n        <div col-4>Kelengkapan</div>\n        <div col-1>:</div>\n        <div col-7> Charger, Mouse, Tas</div>\n      </div>\n      <div class="row">\n        <div col-4>Jenis Service</div>\n        <div col-1>:</div>\n        <div col-7>-</div>\n      </div>\n      <div class="row">\n        <div col-4>Total Biaya</div>\n        <div col-1>:</div>\n        <div col-7>-</div>\n      </div>\n    </div>\n    <h2 class="judul"> Progres </h2>\n    <ion-list>\n      <ion-item class="iconable">\n        <ion-avatar item-start>\n          <ion-icon name="checkmark" item-end></ion-icon>\n        </ion-avatar>\n        <h2>Penjemputan</h2>\n        <h3>Tanggal - </h3>\n      </ion-item>\n      <ion-item class="icondisable">\n        <ion-avatar item-start>\n          <ion-icon name="close" item-end></ion-icon>\n        </ion-avatar>\n        <h2>Diagnosa</h2>\n        <h3>Tanggal : -</h3>\n      </ion-item>\n      <ion-item class="icondisable">\n        <ion-avatar item-start>\n          <ion-icon name="close" item-end></ion-icon>\n        </ion-avatar>\n        <h2>Konfirmasi</h2>\n        <h3>Tanggal : -</h3>\n        <h3>Harga   : -</h3>\n        <button ion-button color="secondary" [disabled]="disableButton">Terima</button>\n        <button ion-button color="danger" [disabled]="disableButton">Batal</button>\n      </ion-item>\n      <ion-item class="icondisable">\n        <ion-avatar item-start>\n          <ion-icon name="close" item-end></ion-icon>\n        </ion-avatar>\n        <h2>Reparasi</h2>\n        <h3>Tanggal : -</h3>\n      </ion-item>\n      <ion-item class="icondisable">\n        <ion-avatar item-start>\n          <ion-icon name="close" item-end></ion-icon>\n        </ion-avatar>\n        <h2>Selesai</h2>\n        <h3>Tanggal : -</h3>\n      </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\Project\List\Project-AzizPC\src\pages\detail\detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], DetailPage);
    return DetailPage;
}());

//# sourceMappingURL=detail.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HistoryPage = (function () {
    function HistoryPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HistoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HistoryPage');
    };
    HistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-history',template:/*ion-inline-start:"D:\Project\List\Project-AzizPC\src\pages\history\history.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>History</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\Project\List\Project-AzizPC\src\pages\history\history.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], HistoryPage);
    return HistoryPage;
}());

//# sourceMappingURL=history.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.submitted = false;
        this.status = "password";
        this.lihat = true;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.showPassword = function () {
        this.status = "text";
        this.lihat = false;
        console.log(this.status);
    };
    LoginPage.prototype.hidePassword = function () {
        this.status = "password";
        this.lihat = true;
        console.log(this.status);
    };
    LoginPage.prototype.signUp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.signIn = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\Project\List\Project-AzizPC\src\pages\login\login.html"*/'<ion-header>\n\n  \n\n  \n\n</ion-header>\n\n  \n\n  \n\n  <ion-content padding>\n\n    <img src="assets/imgs/LogoAzizPC.jpg" class=\'Logo\'>\n\n    <form #loginForm="ngForm" novalidate>\n\n      <ion-list >\n\n        <ion-item>\n\n          <ion-label floating><p class="Head">Email</p></ion-label>\n\n          <ion-input class="Head2" [(ngModel)]="email" name="email" type="email" #user="ngModel" spellcheck="false" autocapitalize="off"\n\n            required>\n\n          </ion-input>\n\n        </ion-item>\n\n        <p ion-text [hidden]="user.valid || submitted == false" color="danger" padding-left class="Warning">\n\n        Email harus diisi\n\n        </p>\n\n  \n\n        <ion-item>\n\n          <ion-label floating><p class="Head">Password</p></ion-label>\n\n          <ion-input class="Head2"  [(ngModel)]="password" name="pass" type="{{status}}" #pass="ngModel"  required>\n\n          </ion-input>\n\n          <button class="tombol" [hidden]="lihat == false" (click)="showPassword()" ion-button clear color="dark" type="button" item-right> <ion-icon name="md-eye" class=\'icon\' color="primary2"> </ion-icon> </button>\n\n          <button class="tombol" [hidden]="lihat == true" (click)="hidePassword()" ion-button clear color="dark" type="button" item-right> <ion-icon name="md-eye-off" class=\'icon\' color="primary2"> </ion-icon> </button>\n\n        </ion-item>\n\n        <p ion-text [hidden]="pass.valid || submitted == false" color="danger" padding-left class="Warning">\n\n          Password harus diisi\n\n        </p>\n\n      </ion-list>\n\n  \n\n      <!--ini buat mock up-->\n\n      <ion-row>\n\n        <ion-col>\n\n          <button class="ButtonMasuk" ion-button color="AyoDermawan" (click)="signIn()" block><p class="ButtonWord">Masuk</p></button>\n\n        </ion-col>\n\n      </ion-row>\n\n  \n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col text-center>\n\n            <p class="Head">\n\n              <font color="black">Tidak punya akun?</font>\n\n              <a class="Link" (click)="signUp()"> Buat akun.</a>\n\n            </p>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n  \n\n    </form>\n\n  \n\n  </ion-content>'/*ion-inline-end:"D:\Project\List\Project-AzizPC\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"D:\Project\List\Project-AzizPC\src\pages\profile\profile.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Profile</ion-title>\n  </ion-navbar>\n</ion-header>  \n<ion-content>\n  <img src="assets/imgs/logo.png" *ngIf="!image" class="Pict" />\n    <img [src]="image" *ngIf="image"/>  \n    <ion-item padding-right text-wrap>\n      <p class="Nama">Namaku</p>\n    </ion-item>\n    <ion-item padding-right text-wrap>\n      <ion-icon name="mail" item-left class="IconMail"></ion-icon>\n      <p class="Head">Email</p>\n      <p class="Konten">Emailku</p>\n    </ion-item>\n    <ion-item padding-right text-wrap>\n      <ion-icon name="call" item-left class="Icon"></ion-icon>\n      <p class="Head">Nomor Telepon</p>\n      <p class="Konten">HPku</p>\n    </ion-item>\n    <ion-item padding-right text-wrap>\n      <ion-icon name="md-map" item-left class="Icon"></ion-icon>\n      <p class="Head">Alamat</p>\n      <p class="Konten">Alamatku</p>\n    </ion-item>\n    <ion-item padding-left-right>\n      <button class=\'Button\' color="AyoDermawan" ion-button block (click)=\'editProfil()\'><p class="ButtonWordWhite">Sunting Profil</p></button>\n      <button class=\'Button\' color="danger" ion-button outline block (click)=\'logOut()\'><p class="ButtonWordBlack">Keluar Akun</p></button>\n    </ion-item>\n</ion-content>\n    '/*ion-inline-end:"D:\Project\List\Project-AzizPC\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ServicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ServicePage = (function () {
    function ServicePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ServicePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ServicePage');
    };
    ServicePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-service',template:/*ion-inline-start:"D:\Project\List\Project-AzizPC\src\pages\service\service.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Service</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <h2> Ulasan kami : </h2>\n  <ion-list>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/imgs/avatar-cher.jpg" />\n      </ion-avatar>\n      <h2>Raja Nusantara</h2>\n      <p>Hebat! saya kasih indoeskrim 1 truk</p>\n    </ion-item>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/imgs/avatar-cher.jpg" />\n      </ion-avatar>\n      <h2>Awkarin</h2>\n      <p>Akhirnya saya bisa nge vlog lagi terima kasih Aziz PC</p>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"D:\Project\List\Project-AzizPC\src\pages\service\service.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ServicePage);
    return ServicePage;
}());

//# sourceMappingURL=service.js.map

/***/ }),

/***/ 117:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/addrepair/addrepair.module": [
		281,
		6
	],
	"../pages/detail/detail.module": [
		282,
		5
	],
	"../pages/history/history.module": [
		283,
		4
	],
	"../pages/login/login.module": [
		284,
		3
	],
	"../pages/profile/profile.module": [
		285,
		2
	],
	"../pages/register/register.module": [
		286,
		1
	],
	"../pages/service/service.module": [
		287,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 158;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"D:\Project\List\Project-AzizPC\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      About\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Project\List\Project-AzizPC\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"D:\Project\List\Project-AzizPC\src\pages\contact\contact.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Contact\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n\n    <ion-item>\n\n      <ion-icon name="ionic" item-start></ion-icon>\n\n      @ionicframework\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Project\List\Project-AzizPC\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(228);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_register_register__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_detail_detail__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_profile_profile__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_history_history__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_service_service__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_addrepair_addrepair__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_detail_detail__["a" /* DetailPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_history_history__["a" /* HistoryPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_service_service__["a" /* ServicePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_addrepair_addrepair__["a" /* AddrepairPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/addrepair/addrepair.module#AddrepairPageModule', name: 'AddrepairPage', segment: 'addrepair', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detail/detail.module#DetailPageModule', name: 'DetailPage', segment: 'detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/history/history.module#HistoryPageModule', name: 'HistoryPage', segment: 'history', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/service/service.module#ServicePageModule', name: 'ServicePage', segment: 'service', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_detail_detail__["a" /* DetailPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_history_history__["a" /* HistoryPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_service_service__["a" /* ServicePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_addrepair_addrepair__["a" /* AddrepairPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_register_register__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_history_history__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_service_service__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_register_register__["a" /* RegisterPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */] },
            { title: 'Service', component: __WEBPACK_IMPORTED_MODULE_8__pages_service_service__["a" /* ServicePage */] },
            { title: 'Profile', component: __WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__["a" /* ProfilePage */] },
            { title: 'History', component: __WEBPACK_IMPORTED_MODULE_7__pages_history_history__["a" /* HistoryPage */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Project\List\Project-AzizPC\src\app\app.html"*/'<ion-menu [content]="content">\n\n    <ion-header>\n\n        <ion-toolbar>\n\n            <ion-title>\n\n                Menu\n\n            </ion-title>\n\n        </ion-toolbar>\n\n    </ion-header>\n\n    <ion-content>\n\n        <ion-list>\n\n          <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n            {{p.title}}\n\n          </button>\n\n        </ion-list>\n\n      </ion-content>\n\n</ion-menu>\n\n\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"D:\Project\List\Project-AzizPC\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Project\List\Project-AzizPC\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"D:\Project\List\Project-AzizPC\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail_detail__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__addrepair_addrepair__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.detail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__detail_detail__["a" /* DetailPage */]);
    };
    HomePage.prototype.add = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__addrepair_addrepair__["a" /* AddrepairPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\Project\List\Project-AzizPC\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Home</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-card>\n\n    <img src="assets/imgs/LogoAzizPC.jpg"/>\n\n      <ion-card-content>\n\n        <ion-card-title>\n\n          Lenovo Yoga\n\n        </ion-card-title>\n\n          <p class="Status"> Status: Diagnosa</p>\n\n          <h3 class="Link">\n\n            <a (click)="detail()"> Detail </a>\n\n          </h3>\n\n           \n\n      </ion-card-content>\n\n  </ion-card>\n\n  <ion-card>\n\n      <img src="assets/imgs/rusak.jpeg"/>\n\n        <ion-card-content>\n\n          <ion-card-title>\n\n            RoG Strix\n\n          </ion-card-title>\n\n            <p>\n\n              The most popular industrial group ever, and largely\n\n              responsible for bringing the music to a mass audience.\n\n            </p>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-fab right bottom>\n\n      <button ion-fab color="light" (click)="add()"><ion-icon name="add"></ion-icon></button>\n\n    </ion-fab>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Project\List\Project-AzizPC\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = (function () {
    function RegisterPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.submitted = false;
        this.status = "password";
        this.lihat = true;
        this.status2 = "password";
        this.lihat2 = true;
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.showPassword = function () {
        this.status = "text";
        this.lihat = false;
        console.log(this.status);
    };
    RegisterPage.prototype.hidePassword = function () {
        this.status = "password";
        this.lihat = true;
        console.log(this.status);
    };
    RegisterPage.prototype.showPassword2 = function () {
        this.status2 = "text";
        this.lihat2 = false;
        console.log(this.status);
    };
    RegisterPage.prototype.hidePassword2 = function () {
        this.status2 = "password";
        this.lihat2 = true;
        console.log(this.status);
    };
    RegisterPage.prototype.signIn = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    RegisterPage.prototype.signUp = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"D:\Project\List\Project-AzizPC\src\pages\register\register.html"*/'<!--\n\n  Generated template for the RegisterPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <h2 class="title">Create New Account</h2>\n\n\n\n  <form #registerForm="ngForm" novalidate>\n\n      <ion-list >\n\n        <ion-item>\n\n          <ion-label floating><p class="Head">Nama</p></ion-label>\n\n          <ion-input class="Head2" [(ngModel)]="name" name="name" type="text" #nama="ngModel" spellcheck="false" autocapitalize="off"\n\n            required>\n\n          </ion-input>\n\n        </ion-item>\n\n        <p ion-text [hidden]="nama.valid || submitted == false" color="danger" padding-left class="Warning">\n\n        Nama harus diisi\n\n        </p>\n\n\n\n        <ion-item>\n\n          <ion-label floating><p class="Head">Email</p></ion-label>\n\n          <ion-input class="Head2" [(ngModel)]="email" name="email" pattern="[^@\]+@[^@\]+\.[^@\s]+" type="email" #mail="ngModel" spellcheck="false" autocapitalize="off"\n\n            required>\n\n          </ion-input>\n\n        </ion-item>\n\n        <p ion-text [hidden]="mail.valid || submitted == false" color="danger" padding-left class="Warning">\n\n        Email harus diisi\n\n        </p>\n\n\n\n        <ion-item>\n\n            <ion-label floating><p class="Head">Nomor Handphone</p></ion-label>\n\n            <ion-input class="Head2" [(ngModel)]="number" name="number" type="number" #nomor="ngModel" spellcheck="false" autocapitalize="off"\n\n              required>\n\n            </ion-input>\n\n          </ion-item>\n\n          <p ion-text [hidden]="nomor.valid || submitted == false" color="danger" padding-left class="Warning">\n\n          Nomor Handphone harus diisi\n\n          </p>\n\n  \n\n        <ion-item>\n\n          <ion-label floating><p class="Head">Password</p></ion-label>\n\n          <ion-input class="Head2"  [(ngModel)]="password" name="password" type="{{status}}" #pass="ngModel"  required>\n\n          </ion-input>\n\n          <button class="tombol" [hidden]="lihat == false" (click)="showPassword()" ion-button clear color="dark" type="button" item-right> <ion-icon name="md-eye" class=\'icon\' color="primary2"> </ion-icon> </button>\n\n          <button class="tombol" [hidden]="lihat == true" (click)="hidePassword()" ion-button clear color="dark" type="button" item-right> <ion-icon name="md-eye-off" class=\'icon\' color="primary2"> </ion-icon> </button>\n\n        </ion-item>\n\n        <p ion-text [hidden]="pass.valid || submitted == false" color="danger" padding-left class="Warning">\n\n          Password harus diisi\n\n        </p>\n\n\n\n        <ion-item>\n\n          <ion-label floating><p class="Head">Konfirmasi Password</p></ion-label>\n\n          <ion-input class="Head2"  [(ngModel)]="password2" name="password2" type="{{status2}}" #pass2="ngModel"  required>\n\n          </ion-input>\n\n          <button class="tombol" [hidden]="lihat2 == false" (click)="showPassword2()" ion-button clear color="dark" type="button" item-right> <ion-icon name="md-eye" class=\'icon\' color="primary2"> </ion-icon> </button>\n\n          <button class="tombol" [hidden]="lihat2 == true" (click)="hidePassword2()" ion-button clear color="dark" type="button" item-right> <ion-icon name="md-eye-off" class=\'icon\' color="primary2"> </ion-icon> </button>\n\n        </ion-item>\n\n        <div ion-text [hidden]="password2==password"  padding-left>\n\n          <p class="Warning" color="danger" *ngIf="password2!=null">Password salah</p>\n\n        </div>\n\n      </ion-list>\n\n  \n\n      <ion-row>\n\n        <ion-col>\n\n          <button class="ButtonMasuk" ion-button color="AyoDermawan" (click)="signUp()" block><p class="ButtonWord">Buat</p></button>\n\n        </ion-col>\n\n      </ion-row>\n\n  \n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col text-center>\n\n            <p class="Head">\n\n              <font color="black">Sudah punya akun?</font>\n\n              <a class="Link" (click)="signIn()"> Masuk.</a>\n\n            </p>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Project\List\Project-AzizPC\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map