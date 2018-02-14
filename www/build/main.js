webpackJsonp([1],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__provider_data__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(82);
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
 * Generated class for the EditProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditProfilePage = (function () {
    function EditProfilePage(navCtrl, navParams, loadCtrl, http, toastCtrl, data) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadCtrl = loadCtrl;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.data = data;
        this.submitted = false;
        this.datas = this.navParams.data;
        this.nama = this.datas.nama;
        this.alamat = this.datas.alamat;
        this.hp = this.datas.hp;
        this.email = this.datas.email;
        this.id = this.datas.id;
        console.log(this.datas.id);
    }
    EditProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditProfilePage');
    };
    EditProfilePage.prototype.editProfil = function (form) {
        var _this = this;
        this.submitted = true;
        var loading = this.loadCtrl.create({
            content: 'Tunggu sebentar...'
        });
        if (form.valid) {
            loading.present();
            console.log(this.nama);
            var input = JSON.stringify({
                nama: this.nama,
                alamat: this.alamat,
                hp: this.hp,
                email: this.email,
                id: this.id
            });
            this.http.post(this.data.link_hosting + "EditProfil.php", input).subscribe(function (data) {
                loading.dismiss();
                var response = data.json();
                console.log(response);
                if (response.status == 200) {
                    var user = response.data;
                    console.log(user);
                    _this.data.login(user);
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */]);
                }
                _this.showAlert(response.message);
            }, function (err) {
                loading.dismiss();
                _this.showError(err);
            });
        }
    };
    EditProfilePage.prototype.showError = function (err) {
        err.status == 0 ?
            this.showAlert("Tidak ada koneksi. Cek kembali sambungan Internet perangkat Anda") :
            this.showAlert("Tidak dapat menyambungkan ke server. Mohon muat kembali halaman ini");
    };
    EditProfilePage.prototype.showAlert = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    EditProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-edit-profile',template:/*ion-inline-start:"D:\Project\List\Project-AzizPC\src\pages\edit-profile\edit-profile.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Profile</ion-title>\n\n  </ion-navbar>\n\n</ion-header>  \n\n<ion-content>\n\n\n\n  <div class="photoprofile">\n\n    <ion-icon name="camera" class="editIcon"></ion-icon>\n\n    <img src="assets/imgs/logo.png" *ngIf="!image" class="Pict"/>\n\n  </div>\n\n    <img [src]="image" *ngIf="image"/>\n\n    <form #editForm="ngForm" novalidate>        \n\n        <ion-item padding-right text-wrap>\n\n          <ion-input class="Konten" value = "{{nama}}" [(ngModel)]="nama" [ngModelOptions]="{standalone: true}"> </ion-input>\n\n        </ion-item>\n\n        <ion-item padding-right text-wrap>\n\n          <ion-icon name="mail" item-left class="IconMail"></ion-icon>\n\n          <p class="Head">Email</p>\n\n          <p class="Konten">{{email}}</p>\n\n        </ion-item>\n\n        <ion-item padding-right text-wrap>\n\n          <ion-icon name="call" item-left class="Icon"></ion-icon>\n\n          <p class="Head">Nomor Telepon</p>\n\n          <ion-input class="Konten" value = "{{hp}}" [(ngModel)]="hp" [ngModelOptions]="{standalone: true}"> </ion-input>\n\n        </ion-item>\n\n        <ion-item padding-right text-wrap>\n\n          <ion-icon name="md-map" item-left class="Icon"></ion-icon>\n\n          <p class="Head">Alamat</p>\n\n          <ion-input class="Konten" value = "{{alamat}}" [(ngModel)]="alamat" [ngModelOptions]="{standalone: true}"> </ion-input>\n\n        </ion-item>\n\n        <ion-item padding-left-right>\n\n          <button class=\'Button\' color="AyoDermawan" ion-button block (click)=\'editProfil(editForm)\'><p class="ButtonWordWhite">Sunting</p></button>\n\n        </ion-item>\n\n    </form>\n\n</ion-content>\n\n    '/*ion-inline-end:"D:\Project\List\Project-AzizPC\src\pages\edit-profile\edit-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__provider_data__["a" /* Data */]])
    ], EditProfilePage);
    return EditProfilePage;
}());

//# sourceMappingURL=edit-profile.js.map

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

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/edit-profile/edit-profile.module": [
		290,
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
webpackAsyncContext.id = 159;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__provider_data__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(42);
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
    // nomor:number;
    // name:string;
    // email: string;
    // password: string;
    // password2:string;
    function RegisterPage(navCtrl, navParams, loadCtrl, http, toastCtrl, data) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadCtrl = loadCtrl;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.data = data;
        this.user = {};
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
    };
    RegisterPage.prototype.signUp = function (form) {
        var _this = this;
        this.submitted = true;
        var loading = this.loadCtrl.create({
            content: 'Tunggu sebentar...'
        });
        if (form.valid) {
            loading.present();
            var input = JSON.stringify({
                nama: this.user.nama,
                email: this.user.email,
                password: this.user.password,
                role: this.user.role = "2",
                hp: this.user.hp,
                alamat: this.user.alamat
            });
            this.http.post(this.data.link_hosting + "signUpInfo.php", input).subscribe(function (data) {
                loading.dismiss();
                var response = data.json();
                console.log(response);
                if (response.status == 200) {
                    var user = response.data;
                    console.log(user);
                    _this.data.login(user);
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
                }
                _this.showAlert(response.message);
            }, function (err) {
                loading.dismiss();
                _this.showError(err);
            });
        }
    };
    RegisterPage.prototype.showError = function (err) {
        err.status == 0 ?
            this.showAlert("Tidak ada koneksi. Cek kembali sambungan Internet perangkat Anda") :
            this.showAlert("Tidak dapat menyambungkan ke server. Mohon muat kembali halaman ini");
    };
    RegisterPage.prototype.showAlert = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"D:\Project\List\Project-AzizPC\src\pages\register\register.html"*/'<!--\n\n  Generated template for the RegisterPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <h2 class="title">Buat Akun Baru</h2>\n\n\n\n  <form #registerForm="ngForm" novalidate>\n\n      <ion-list >\n\n        <ion-item>\n\n          <ion-label floating><p class="Head">Nama</p></ion-label>\n\n          <ion-input class="Head2" [(ngModel)]="user.nama" name="name" type="text" #nama="ngModel" spellcheck="false" autocapitalize="off"\n\n            required>\n\n          </ion-input>\n\n        </ion-item>\n\n        <p ion-text [hidden]="nama.valid || submitted == false" color="danger" padding-left class="Warning">\n\n        Nama harus diisi\n\n        </p> \n\n\n\n        <ion-item>\n\n          <ion-label floating><p class="Head">Email</p></ion-label>\n\n          <ion-input class="Head2" [(ngModel)]="user.email" name="email" pattern="[^@\]+@[^@\]+\.[^@\s]+" type="email" #mail="ngModel" spellcheck="false" autocapitalize="off"\n\n            required>\n\n          </ion-input>\n\n        </ion-item>\n\n        <p ion-text [hidden]="mail.valid || submitted == false" color="danger" padding-left class="Warning">\n\n        Email harus diisi\n\n        </p>\n\n\n\n        <ion-item>\n\n            <ion-label floating><p class="Head">Nomor Handphone</p></ion-label>\n\n            <ion-input class="Head2" [(ngModel)]="user.hp" name="number" type="number" #nomor="ngModel" spellcheck="false" autocapitalize="off"\n\n              required>\n\n            </ion-input>\n\n          </ion-item>\n\n          <p ion-text [hidden]="nomor.valid || submitted == false" color="danger" padding-left class="Warning">\n\n          Nomor Handphone harus diisi\n\n          </p>\n\n  \n\n        <ion-item>\n\n          <ion-label floating><p class="Head">Password</p></ion-label>\n\n          <ion-input class="Head2"  [(ngModel)]="user.password" name="password" type="{{status}}" #pass="ngModel"  required>\n\n          </ion-input>\n\n          <button class="tombol" [hidden]="lihat == false" (click)="showPassword()" ion-button clear color="dark" type="button" item-right> <ion-icon name="md-eye" class=\'icon\' color="primary2"> </ion-icon> </button>\n\n          <button class="tombol" [hidden]="lihat == true" (click)="hidePassword()" ion-button clear color="dark" type="button" item-right> <ion-icon name="md-eye-off" class=\'icon\' color="primary2"> </ion-icon> </button>\n\n        </ion-item>\n\n        <p ion-text [hidden]="pass.valid || submitted == false" color="danger" padding-left class="Warning">\n\n          Password harus diisi\n\n        </p>\n\n\n\n        <ion-item>\n\n          <ion-label floating><p class="Head">Alamat</p></ion-label>\n\n          <ion-input class="Head2" [(ngModel)]="user.alamat" name="address" type="text" #alamat="ngModel" spellcheck="false" autocapitalize="off"\n\n            required>\n\n          </ion-input>\n\n        </ion-item>\n\n        <p ion-text [hidden]="alamat.valid || submitted == false" color="danger" padding-left class="Warning">\n\n        Alamat harus diisi\n\n        </p> \n\n\n\n\n\n      </ion-list>\n\n  \n\n      <ion-row>\n\n        <ion-col>\n\n          <button class="ButtonMasuk" ion-button color="AyoDermawan" (click)="signUp(registerForm)" block><p class="ButtonWord">Buat</p></button>\n\n        </ion-col>\n\n      </ion-row>\n\n  \n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col text-center>\n\n            <p class="Head">\n\n              <font color="black">Sudah punya akun?</font>\n\n              <a class="Link" (click)="signIn()"> Masuk.</a>\n\n            </p>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Project\List\Project-AzizPC\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_0__provider_data__["a" /* Data */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
    function DetailPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.disableButton = true;
        this.jemput = true;
        this.diagnosa = true;
        this.konfirmasi = true;
        this.reparasi = false;
        this.selesai = false;
    }
    DetailPage.prototype.Terima = function () {
        var confirm = this.alertCtrl.create({
            title: 'Terima',
            message: 'Apakah anda yakin menerima reparasi dengan biaya sejumlah : duid? Barang yang telah dikonformasi tidak dapat dibatalkan.',
            buttons: [
                {
                    text: 'Ya',
                    handler: function () {
                        console.log('Agree clicked');
                    }
                },
                {
                    text: 'Tidak',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                }
            ]
        });
        confirm.present();
    };
    DetailPage.prototype.Batal = function () {
        var confirm = this.alertCtrl.create({
            title: 'Batal',
            message: 'Apakah anda yakin ingin membatalkan reparasi?',
            buttons: [
                {
                    text: 'Ya',
                    handler: function () {
                        console.log('Agree clicked');
                    }
                },
                {
                    text: 'Tidak',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                }
            ]
        });
        confirm.present();
    };
    DetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailPage');
    };
    DetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detail',template:/*ion-inline-start:"D:\Project\List\Project-AzizPC\src\pages\detail\detail.html"*/'<!--\n  Generated template for the DetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>detail</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <img src="assets/imgs/rusak.jpeg"/><br/>\n  <div padding>\n    <h2 class="judul"> Nama barang </h2>\n      <div class="row">\n        <div col-4>Nomor Telepon</div>\n        <div col-1>:</div>\n        <div col-7>09888888888</div>\n      </div>\n      <div class="row">\n        <div col-4>Tanggal masuk</div>\n        <div col-1>:</div>\n        <div col-7>25 Desember 2017</div>\n      </div>\n      <div class="row">\n        <div col-4>Tanggal selesai</div>\n        <div col-1>:</div>\n        <div col-7>-</div>\n      </div>\n      <div class="row">\n        <div col-4>Kelengkapan</div>\n        <div col-1>:</div>\n        <div col-7> Charger, Mouse, Tas</div>\n      </div>\n      <div class="row">\n        <div col-4>Jenis servis</div>\n        <div col-1>:</div>\n        <div col-7>-</div>\n      </div>\n      <div class="row">\n        <div col-4>Total biaya</div>\n        <div col-1>:</div>\n        <div col-7>-</div>\n      </div>\n    </div>\n    \n    <h2 class="judul"> Progres </h2>\n    <ion-list>\n\n      <ion-item class="iconable" [hidden]="!jemput">\n        <ion-avatar item-start>\n          <ion-icon name="checkmark" item-end></ion-icon>\n        </ion-avatar>\n        <h2>Penjemputan</h2>\n        <h3>Tanggal - </h3>\n      </ion-item>\n      <ion-item class="icondisable" [hidden]="jemput">\n        <ion-avatar item-start>\n          <ion-icon name="close" item-end></ion-icon>\n        </ion-avatar>\n        <h2>Penjemputan</h2>\n        <h3>Tanggal - </h3>\n      </ion-item>\n\n      <ion-item class="iconable" [hidden]="!diagnosa">\n        <ion-avatar item-start>\n          <ion-icon name="checkmark" item-end></ion-icon>\n        </ion-avatar>\n        <h2>Diagnosa</h2>\n        <h3>Tanggal : -</h3>\n      </ion-item>\n      <ion-item class="icondisable" [hidden]="diagnosa">\n          <ion-avatar item-start>\n            <ion-icon name="close" item-end></ion-icon>\n          </ion-avatar>\n          <h2>Diagnosa</h2>\n          <h3>Tanggal : -</h3>\n        </ion-item>\n\n      <ion-item class="iconable" [hidden]="!konfirmasi">\n        <ion-avatar item-start>\n          <ion-icon name="checkmark" item-end></ion-icon>\n        </ion-avatar>\n        <h2>Konfirmasi</h2>\n        <h3>Tanggal : -</h3>\n        <h3>Harga   : -</h3>\n        <button ion-button color="secondary" [disabled]="!konfirmasi" (click)="Terima()">Terima</button>\n        <button ion-button color="danger" [disabled]="!konfirmasi" (click)="Batal()">Batal</button>\n      </ion-item>\n      <ion-item class="icondisable" [hidden]="konfirmasi">\n        <ion-avatar item-start>\n          <ion-icon name="close" item-end></ion-icon>\n        </ion-avatar>\n        <h2>Konfirmasi</h2>\n        <h3>Tanggal : -</h3>\n        <h3>Harga   : -</h3>\n        <button ion-button color="secondary" [disabled]="konfirmasi">Terima</button>\n        <button ion-button color="danger" [disabled]="konfirmasi">Batal</button>\n      </ion-item>\n\n      <ion-item class="iconable" [hidden]="!reparasi">\n        <ion-avatar item-start>\n          <ion-icon name="checkmark" item-end></ion-icon>\n        </ion-avatar>\n        <h2>Reparasi</h2>\n        <h3>Tanggal : -</h3>\n      </ion-item>\n      <ion-item class="icondisable" [hidden]="reparasi">\n        <ion-avatar item-start>\n          <ion-icon name="close" item-end></ion-icon>\n        </ion-avatar>\n        <h2>Reparasi</h2>\n        <h3>Tanggal : -</h3>\n      </ion-item>\n\n      <ion-item class="iconable" [hidden]="!selesai">\n        <ion-avatar item-start>\n          <ion-icon name="checkmark" item-end></ion-icon>\n        </ion-avatar>\n        <h2>Selesai</h2>\n        <h3>Tanggal : -</h3>\n      </ion-item>\n      <ion-item class="icondisable" [hidden]="selesai">\n        <ion-avatar item-start>\n          <ion-icon name="close" item-end></ion-icon>\n        </ion-avatar>\n        <h2>Selesai</h2>\n        <h3>Tanggal : -</h3>\n      </ion-item>\n      \n      <div padding>\n        <button ion-button block padding [disabled]="true">Reveiw</button>\n      </div>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\Project\List\Project-AzizPC\src\pages\detail\detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], DetailPage);
    return DetailPage;
}());

//# sourceMappingURL=detail.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddrepairPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(83);
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
    function AddrepairPage(alertCtrl, camera, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.camera = camera;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AddrepairPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddrepairPage');
    };
    AddrepairPage.prototype.ngOnInit = function () {
        this.photos = [];
    };
    AddrepairPage.prototype.takePhoto = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.photos.push(_this.base64Image);
            _this.photos.revese();
        }, function (err) {
            // Handle error
        });
    };
    AddrepairPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Gagal',
            subTitle: 'Gagal mengambil gambar',
            buttons: ['OK']
        });
        alert.present();
    };
    AddrepairPage.prototype.foto = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Unggah gambar',
            subTitle: 'Pilih sumber gambar',
            buttons: [
                {
                    text: 'Camera',
                    handler: function () {
                        _this.takePhoto();
                    }
                },
                {
                    text: 'Galery',
                    handler: function () {
                    }
                }
            ]
        });
        confirm.present();
    };
    AddrepairPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addrepair',template:/*ion-inline-start:"D:\Project\List\Project-AzizPC\src\pages\addrepair\addrepair.html"*/'<!--\n  Generated template for the AddrepairPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Tambah Servis</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <h5 class="head">Nama Barang</h5>\n    <ion-item>\n      <ion-input type="text" placeholder="Ex. Laptop Asus ROG Gx600"></ion-input>\n    </ion-item>\n\n    <h5 class="head">Keluhan</h5>\n    <ion-item>\n      <ion-textarea placeholder="Keluhan Ananda"></ion-textarea>\n    </ion-item>\n\n    <h5 class="head"> Kelengkapan Barang</h5>\n    <ion-list>\n      <ion-item>\n        <ion-label>Charger</ion-label>\n        <ion-checkbox [(ngModel)]="charger"></ion-checkbox>\n      </ion-item>\n      <ion-item>\n         <ion-label>Maouse</ion-label>\n        <ion-checkbox [(ngModel)]="Mouse"></ion-checkbox>\n      </ion-item>\n      <ion-item>\n        <ion-label>Tas</ion-label>\n        <ion-checkbox [(ngModel)]="mushrooms"></ion-checkbox>\n      </ion-item>\n      <ion-item>\n        <ion-label>CD/Driver</ion-label>\n        <ion-checkbox [(ngModel)]="CD/Driver"></ion-checkbox>\n      </ion-item>\n    </ion-list>\n\n    <h5 class="head">Jenis Servis </h5>\n    <ion-item>\n        <ion-label>Jenis Service</ion-label>\n        <ion-select [(ngModel)]="gaming" multiple="true">\n          <ion-option value="1">Install Ulang OS</ion-option>\n          <ion-option value="2">HDD Bad Sector</ion-option>\n          <ion-option value="3">Recovery Data</ion-option>\n          <ion-option value="4">Ganti HDD/LED/LCD</ion-option>\n          <ion-option value="5">Upgrade Memory</ion-option>\n          <ion-option value="6">Mati Total</ion-option>\n          <ion-option value="7">Blue Screen</ion-option>\n          <ion-option value="8">Membersihkan Laptop/NB/PC</ion-option>\n          <ion-option value="9">Ganti Fan</ion-option>\n          <ion-option value="10">Ganti Mainboard/Keybiard/Casing</ion-option>\n          <ion-option value="11">Service Panggilan</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <h5 class="head">Alamat Penjemputan</h5>\n      <ion-item>\n        <ion-input type="text" placeholder="Ex. IPB dramaga"></ion-input>\n      </ion-item>\n\n      <h5 class="head">Unggah Foto Barang</h5>\n      <button ion-button icon-left (click)="foto()">\n        <ion-icon name="camera"></ion-icon>\n        Ambil Foto\n      </button>\n  </ion-list>\n  <button ion-button full>Submit</button>\n</ion-content>\n'/*ion-inline-end:"D:\Project\List\Project-AzizPC\src\pages\addrepair\addrepair.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _d || Object])
    ], AddrepairPage);
    return AddrepairPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=addrepair.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
            selector: 'page-history',template:/*ion-inline-start:"D:\Project\List\Project-AzizPC\src\pages\history\history.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Riwayat</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n  \n\n  \n\n  \n\n  <ion-content>\n\n    <ion-card>\n\n      <img src="assets/imgs/LogoAzizPC.jpg"/>\n\n        <ion-card-content>\n\n          <ion-card-title>\n\n            Lenovo Yoga\n\n          </ion-card-title>\n\n            <p class="Status"> Status: Selesai</p>\n\n            <h3 class="Link">\n\n              <a (click)="detail()"> Detail </a>\n\n            </h3>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n      <img src="assets/imgs/LogoAzizPC.jpg"/>\n\n        <ion-card-content>\n\n          <ion-card-title>\n\n            Lenovo Yoga\n\n          </ion-card-title>\n\n            <p class="Status"> Status: Dibatalkan</p>\n\n            <h3 class="Link">\n\n              <a (click)="detail()"> Detail </a>\n\n            </h3>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n      <img src="assets/imgs/LogoAzizPC.jpg"/>\n\n        <ion-card-content>\n\n          <ion-card-title>\n\n            Lenovo Yoga\n\n          </ion-card-title>\n\n            <p class="Status"> Status: Diagnosa</p>\n\n            <h3 class="Link">\n\n              <a (click)="detail()"> Detail </a>\n\n            </h3>\n\n        </ion-card-content>\n\n    </ion-card>\n\n  </ion-content>\n\n  '/*ion-inline-end:"D:\Project\List\Project-AzizPC\src\pages\history\history.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], HistoryPage);
    return HistoryPage;
}());

//# sourceMappingURL=history.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
            selector: 'page-service',template:/*ion-inline-start:"D:\Project\List\Project-AzizPC\src\pages\service\service.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Service</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-slides pager>\n    <ion-slide style="background-color: green">\n      <h2>Slide 1</h2>\n    </ion-slide>\n    <ion-slide style="background-color: blue">\n      <h2>Slide 2</h2>\n    </ion-slide>\n    <ion-slide style="background-color: red">\n      <h2>Slide 3</h2>\n    </ion-slide>\n  </ion-slides>\n  <div padding>\n    <h2> Ulasan kami : </h2>\n    <ion-list>\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="assets/imgs/avatar-cher.jpg" />\n        </ion-avatar>\n        <h2>Raja Nusantara</h2>\n        <p>Hebat! saya kasih indoeskrim 1 truk</p>\n      </ion-item>\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="assets/imgs/avatar-cher.jpg" />\n        </ion-avatar>\n        <h2>Awkarin</h2>\n        <p>Akhirnya saya bisa nge vlog lagi terima kasih Aziz PC</p>\n      </ion-item>\n    </ion-list>\n  </div>  \n</ion-content>\n'/*ion-inline-end:"D:\Project\List\Project-AzizPC\src\pages\service\service.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ServicePage);
    return ServicePage;
}());

//# sourceMappingURL=service.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(234);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__provider_data__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_register_register__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_detail_detail__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_profile_profile__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_history_history__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_service_service__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_addrepair_addrepair__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_storage__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_edit_profile_edit_profile__ = __webpack_require__(107);
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
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_detail_detail__["a" /* DetailPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_history_history__["a" /* HistoryPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_service_service__["a" /* ServicePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_addrepair_addrepair__["a" /* AddrepairPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_edit_profile_edit_profile__["a" /* EditProfilePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/edit-profile/edit-profile.module#EditProfilePageModule', name: 'EditProfilePage', segment: 'edit-profile', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_19__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_detail_detail__["a" /* DetailPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_history_history__["a" /* HistoryPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_service_service__["a" /* ServicePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_addrepair_addrepair__["a" /* AddrepairPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_edit_profile_edit_profile__["a" /* EditProfilePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__provider_data__["a" /* Data */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_history_history__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_service_service__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__provider_data__ = __webpack_require__(32);
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
    function MyApp(platform, statusBar, splashScreen, data) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.data = data;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Beranda', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */] },
            { title: 'Servis', component: __WEBPACK_IMPORTED_MODULE_8__pages_service_service__["a" /* ServicePage */] },
            { title: 'Profil', component: __WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__["a" /* ProfilePage */] },
            { title: 'Riwayat', component: __WEBPACK_IMPORTED_MODULE_7__pages_history_history__["a" /* HistoryPage */] },
        ];
        this.data.isLogin().then(function (value) {
            if (value) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
            }
        });
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Project\List\Project-AzizPC\src\app\app.html"*/'<ion-menu [content]="content">\n\n    <ion-header>\n\n        <ion-toolbar>\n\n            <ion-title>\n\n                Menu\n\n            </ion-title>\n\n        </ion-toolbar>\n\n    </ion-header>\n\n    <ion-content>\n\n        <ion-list>\n\n          <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n            {{p.title}}\n\n          </button>\n\n        </ion-list>\n\n      </ion-content>\n\n</ion-menu>\n\n\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"D:\Project\List\Project-AzizPC\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_9__provider_data__["a" /* Data */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(42);
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

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Data; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Data = (function () {
    function Data(http, storage) {
        this.http = http;
        this.storage = storage;
        this.link_local = "http://127.0.0.1/AzisPc/BackEnd/";
        this.link_hosting = "http://azispc.codepanda.web.id/AzisPc/BackEnd/";
        this.HAS_LOGGED_IN = 'status_login';
        console.log('Hello data provider');
    }
    Data.prototype.login = function (data) {
        this.storage.set(this.HAS_LOGGED_IN, true);
        this.storage.set('user_data', data);
        //this.storage.set('role', role);
    };
    ;
    Data.prototype.logout = function () {
        this.storage.remove(this.HAS_LOGGED_IN);
        this.storage.remove('user_data');
        // this.storage.remove('role');
    };
    ;
    Data.prototype.isLogin = function () {
        return this.storage.get(this.HAS_LOGGED_IN).then(function (value) {
            return value;
        });
    };
    Data.prototype.getRole = function () {
        return this.storage.get('role').then(function (value) {
            return value;
        });
    };
    Data.prototype.getData = function () {
        return this.storage.get('user_data').then(function (value) {
            return value;
        });
    };
    Data = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], Data);
    return Data;
}());

//# sourceMappingURL=data.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail_detail__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__addrepair_addrepair__ = __webpack_require__(163);
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
            selector: 'page-home',template:/*ion-inline-start:"D:\Project\List\Project-AzizPC\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Home</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-card>\n\n    <img src="assets/imgs/LogoAzizPC.jpg"/>\n\n      <ion-card-content>\n\n        <ion-card-title>\n\n          Lenovo Yoga\n\n        </ion-card-title>\n\n          <p class="Status"> Status: Diagnosa</p>\n\n          <h3 class="Link">\n\n            <a (click)="detail()"> Detail </a>\n\n          </h3>\n\n      </ion-card-content>\n\n  </ion-card>\n\n  <ion-card>\n\n    <img src="assets/imgs/rusak.jpeg"/>\n\n      <ion-card-content>\n\n        <ion-card-title>\n\n          Lenovo Yoga\n\n        </ion-card-title>\n\n          <p class="Status"> Status: Diagnosa</p>\n\n          <h3 class="Link">\n\n            <a (click)="detail()"> Detail </a>\n\n          </h3>\n\n      </ion-card-content>\n\n  </ion-card>\n\n  <ion-card>\n\n    <img src="assets/imgs/LogoAzizPC.jpg"/>\n\n      <ion-card-content>\n\n        <ion-card-title>\n\n          Lenovo Yoga\n\n        </ion-card-title>\n\n          <p class="Status"> Status: Diagnosa</p>\n\n          <h3 class="Link">\n\n            <a (click)="detail()"> Detail </a>\n\n          </h3>\n\n      </ion-card-content>\n\n  </ion-card>\n\n    <ion-fab right bottom>\n\n      <button ion-fab color="light" (click)="add()"><ion-icon name="add"></ion-icon></button>\n\n    </ion-fab>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Project\List\Project-AzizPC\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__provider_data__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(41);
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
    function LoginPage(navCtrl, navParams, loadCtrl, http, data, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadCtrl = loadCtrl;
        this.http = http;
        this.data = data;
        this.toastCtrl = toastCtrl;
        // user: {nama?: string, email?: string, password?: string, role?:string, hp?:string} = {};  
        this.submitted = false;
        this.status = "password";
        this.lihat = true;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.sign = function (form) {
        var _this = this;
        this.submitted = true;
        var loading = this.loadCtrl.create({
            content: 'Tunggu sebentar...'
        });
        console.log(this.email);
        if (form.valid) {
            loading.present();
            var input = JSON.stringify({
                email: this.email,
                password: this.password
            });
            this.http.post(this.data.link_hosting + "login.php", input).subscribe(function (data) {
                var response = data.json();
                if (response.status == 200) {
                    var user = response.data;
                    console.log(user);
                    _this.data.login(user);
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                    loading.dismiss();
                }
                _this.showAlert(response.message);
            });
        }
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
    LoginPage.prototype.Register = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.showAlert = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    LoginPage.prototype.signUp = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.skip = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\Project\List\Project-AzizPC\src\pages\login\login.html"*/'<ion-header>\n\n  \n\n  \n\n</ion-header>\n\n  \n\n  \n\n  <ion-content padding>\n\n    <img src="assets/imgs/LogoAzizPC.jpg" class=\'Logo\'>\n\n    <form #loginForm="ngForm" novalidate>\n\n      <ion-list >\n\n        <ion-item>\n\n          <ion-label floating><p class="Head">Email</p></ion-label>\n\n          <ion-input class="Head2" [(ngModel)]="email" name="email" type="email" #user="ngModel" spellcheck="false" autocapitalize="off"\n\n            required>\n\n          </ion-input>\n\n        </ion-item>\n\n        <p ion-text [hidden]="user.valid || submitted == false" color="danger" padding-left class="Warning">\n\n        Email harus diisi\n\n        </p>\n\n  \n\n        <ion-item>\n\n          <ion-label floating><p class="Head">Password</p></ion-label>\n\n          <ion-input class="Head2"  [(ngModel)]="password" name="pass" type="{{status}}" #pass="ngModel"  required>\n\n          </ion-input>\n\n          <button class="tombol" [hidden]="lihat == false" (click)="showPassword()" ion-button clear color="dark" type="button" item-right> <ion-icon name="md-eye" class=\'icon\' color="primary2"> </ion-icon> </button>\n\n          <button class="tombol" [hidden]="lihat == true" (click)="hidePassword()" ion-button clear color="dark" type="button" item-right> <ion-icon name="md-eye-off" class=\'icon\' color="primary2"> </ion-icon> </button>\n\n        </ion-item>\n\n        <p ion-text [hidden]="pass.valid || submitted == false" color="danger" padding-left class="Warning">\n\n          Password harus diisi\n\n        </p>\n\n      </ion-list>\n\n  \n\n      <!--ini buat mock up-->\n\n      <ion-row>\n\n        <ion-col>\n\n          <button class="ButtonMasuk" ion-button color="AyoDermawan" (click)="sign(loginForm)" block><p class="ButtonWord">Masuk</p></button>\n\n        </ion-col>\n\n      </ion-row>\n\n  \n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col text-center>\n\n            <p class="Head">\n\n              <font color="black">Tidak punya akun?</font>\n\n              <a class="Link" (click)="signUp()"> Buat akun.</a>\n\n              <a class="Link" (click)="skip()">Skip wiw</a>\n\n            </p>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n  \n\n    </form>\n\n  \n\n  </ion-content>'/*ion-inline-end:"D:\Project\List\Project-AzizPC\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_0__provider_data__["a" /* Data */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__edit_profile_edit_profile__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__provider_data__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(83);
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
    function ProfilePage(navCtrl, navParams, data, alertCtrl, app, camera) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = data;
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.camera = camera;
        this.data.getData().then(function (data) {
            _this.datas = data;
            _this.nama = _this.datas.nama;
            _this.email = _this.datas.email;
            _this.hp = _this.datas.hp;
            _this.alamat = _this.datas.alamat;
            console.log(_this.datas.alamat);
        });
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.logOut = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: '',
            subTitle: 'Apakah kamu yakin ingin keluar?',
            buttons: [
                {
                    text: 'Tidak',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Ya',
                    handler: function () {
                        console.log('Agree clicked');
                        // this.navCtrl.setRoot(MyApp); 
                        _this.data.logout();
                        _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_1__login_login__["a" /* LoginPage */]);
                        // , 
                        // this.data.logout(); 
                        // this.app.getRootNav().setRoot(MyApp); 
                    }
                }
            ]
        });
        confirm.present();
    };
    ProfilePage.prototype.editProfil = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__edit_profile_edit_profile__["a" /* EditProfilePage */], this.datas);
    };
    ProfilePage.prototype.takePhoto = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.photos.push(_this.base64Image);
            _this.photos.revese();
        }, function (err) {
            // Handle error
        });
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"D:\Project\List\Project-AzizPC\src\pages\profile\profile.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Profile</ion-title>\n\n  </ion-navbar>\n\n</ion-header>  \n\n<ion-content>\n\n  <div class="photoprofile">\n\n    <ion-icon name="camera" class="editIcon" (click)="takePhoto()"></ion-icon>\n\n    <img src="assets/imgs/logo.png" *ngIf="!image" class="Pict"/>\n\n  </div>\n\n    <img [src]="image" *ngIf="image"/>  \n\n    <ion-item padding-right text-wrap>\n\n      <p class="Nama">{{nama}}</p>\n\n    </ion-item>\n\n    <ion-item padding-right text-wrap>\n\n      <ion-icon name="mail" item-left class="IconMail"></ion-icon>\n\n      <p class="Head">Email</p>\n\n      <p class="Konten">{{email}}</p>\n\n    </ion-item>\n\n    <ion-item padding-right text-wrap>\n\n      <ion-icon name="call" item-left class="Icon"></ion-icon>\n\n      <p class="Head">Nomor Telepon</p>\n\n      <p class="Konten">{{hp}}</p>\n\n    </ion-item>\n\n    <ion-item padding-right text-wrap>\n\n      <ion-icon name="md-map" item-left class="Icon"></ion-icon>\n\n      <p class="Head">Alamat</p>\n\n      <p class="Konten">{{alamat}}</p>\n\n    </ion-item>\n\n    <ion-item padding-left-right>\n\n      <button class=\'Button\' color="AyoDermawan" ion-button block (click)=\'editProfil()\'><p class="ButtonWordWhite">Sunting Profil</p></button>\n\n      <button class=\'Button\' color="danger" ion-button outline block (click)=\'logOut()\'><p class="ButtonWordBlack">Keluar Akun</p></button>\n\n    </ion-item>\n\n</ion-content>\n\n    '/*ion-inline-end:"D:\Project\List\Project-AzizPC\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__provider_data__["a" /* Data */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ })

},[210]);
//# sourceMappingURL=main.js.map