(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-song/add-song.component.css":
/*!*************************************************!*\
  !*** ./src/app/add-song/add-song.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1zb25nL2FkZC1zb25nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/add-song/add-song.component.html":
/*!**************************************************!*\
  !*** ./src/app/add-song/add-song.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<main id=\"main\">\n  <section id=\"about\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-6 mt-5\">\n          <h2>Add Song</h2>\n          <p>\"There is pleasure in the pathless woods, there is rapture in the lonely shore, there is society where none intrudes, by the deep sea, and music in its roar; I love not Man the less, but Nature more.\" \n              <br>- Lord Byron</p>\n        </div>\n        <div class=\"col-lg-3\">\n          \n        </div>\n        <div class=\"col-lg-3\">\n          \n        </div>\n      </div>\n    </div>\n  </section>\n<!--==========================\nContact Section\n============================-->\n<section id=\"contact\" class=\"section-bg wow fadeInUp\">\n\n\n  <div *ngIf=\"msgData.data\" class=\"{{msgData.msgClass}}\">{{msgData.msgText}}</div>\n\n\n  <div class=\"form\">\n    <form class=\"contactForm\" #addForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n\n      <div class=\"form-row\">\n        <div class=\"col-md-3\"></div>\n        <div class=\"form-group col-md-6\">\n          <input type=\"text\" id=\"songName\" name=\"songName\" class=\"form-control\" placeholder=\"Song Title : \" data-rule=\"minlen:4\" data-msg=\"Please enter at least 4 chars\" [(ngModel)]=\"songName\" />\n          <div class=\"validation\"></div>\n          \n          <!-- <div *ngIf=\"name1.invalid && (name1.dirty || name1.touched)\" class=\"alert alert-danger\">\n            <div *ngIf=\"name1.errors.required\">Song Name is required. </div>\n            <div *ngIf=\"songName.errors.minlength\">song Name must be at least 4 characters long.</div>\n          </div> -->\n\n          <div class=\"col-md-3\"></div>\n        </div>\n      </div>\n\n      <div class=\"form-row\">\n        <div class=\"col-md-3\"></div>\n        <div class=\"form-group col-md-6\">\n          <input type=\"text\" name=\"songAlbum\" class=\"form-control\" placeholder=\"Song Album : \" data-rule=\"minlen:4\" data-msg=\"Please enter at least 4 chars\" [(ngModel)]=\"songAlbum\" />\n          <div class=\"validation\"></div>\n        </div>\n        <div class=\"col-md-3\"></div>\n      </div>\n    \n      <div class=\"form-row\">\n        <div class=\"col-md-3\"></div>\n        <div class=\"form-group col-md-6\">\n          <input type=\"text\" name=\"songArtist\" class=\"form-control\" placeholder=\"Song Artist : \" data-rule=\"minlen:4\" data-msg=\"Please enter at least 4 chars\" [(ngModel)]=\"songArtist\" />\n          <div class=\"validation\"></div>\n        </div>\n        <div class=\"col-md-3\"></div>\n      </div>\n\n      <div class=\"form-row\">\n            <div class=\"col-md-3\"></div>\n            <div class=\"form-group col-md-6\">\n              <input type=\"text\" name=\"songYoutubeLink\" class=\"form-control\" placeholder=\"Youtube Link: \" data-rule=\"minlen:4\" data-msg=\"Please enter youtube link\" [(ngModel)]=\"songYoutubeLink\"/>\n              <div class=\"validation\"></div>\n            </div>\n            <div class=\"col-md-3\"></div>\n      </div>\n\n      <div class=\"form-row\">\n        <div class=\"col-md-3\"></div>\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <textarea class=\"form-control\" name=\"songDesc\" rows=\"5\" data-rule=\"required\" data-msg=\"Please write something for us\" placeholder=\"Song Description\" [(ngModel)]=\"songDesc\" ></textarea>\n            <div class=\"validation\"></div>\n          </div>\n        </div>\n        <div class=\"col-md-3\"></div>\n      </div>\n\n      <div class=\"form-row\">\n        <div class=\"col-md-3\"></div>\n        <div class=\"form-group col-md-6\">\n          <div class=\"col-md-2\" style=\"float: left;\">Genre :</div> \n          <select name=\"songGenure\" data-rule=\"required\" data-msg=\"Please Select a Genre\" [(ngModel)]=\"songGenure\" >\n                <option *ngFor=\"let gen of genreList\" value=\"{{gen.genureLink}}\">{{gen.genureName}}</option>\n          </select> \n          <div class=\"validation\"></div>\n        </div>\n        <div class=\"col-md-3\"></div>\n      </div>\n\n      <div class=\"form-row\">\n        <div class=\"col-md-3\"></div>\n        <div class=\"form-group col-md-6\">\n          <input type=\"text\" name=\"songPrice\" data-rule=\"required\" class=\"form-control\" placeholder=\"Price \" data-msg=\"Please enter price\" [(ngModel)]=\"songPrice\"/>\n          <div class=\"validation\"></div>\n        </div>\n        <div class=\"col-md-3\"></div>\n      </div>\n\n\n      <div class=\"form-row\">\n        <div class=\"col-md-3\"></div>\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <input type=\"file\" name=\"songImage\" data-rule=\"required\" data-msg=\"Please choose an image\" [(ngModel)]=\"songImage\" />\n            <div class=\"validation\"></div>\n          </div>\n        </div>\n        <div class=\"col-md-3\"></div>\n      </div>\n\n      <div class=\"text-center\"><button type=\"submit\" >Add</button></div>\n\n    </form>\n  </div>\n\n</section><!-- #contact -->\n</main>"

/***/ }),

/***/ "./src/app/add-song/add-song.component.ts":
/*!************************************************!*\
  !*** ./src/app/add-song/add-song.component.ts ***!
  \************************************************/
/*! exports provided: AddSongComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSongComponent", function() { return AddSongComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var AddSongComponent = /** @class */ (function () {
    function AddSongComponent(httpVar) {
        this.httpVar = httpVar;
        this.songName = "";
        this.songAlbum = "";
        this.songArtist = "";
        this.songYoutubeLink = "";
        this.songDesc = "";
        this.songGenure = "";
        this.msgData = { data: false };
        this.baseUrl = window.location.origin;
    }
    AddSongComponent.prototype.ngOnInit = function () {
        var _this = this;
        var link = "http://127.0.0.1:8000/genure/";
        //let link ="genure"
        this.httpVar.get(link).subscribe(function (data) {
            _this.genreList = data;
            console.log(_this.genreList);
        });
        this.httpVar.post("http://127.0.0.1:8000/song/test", { "name": "name" }).subscribe(function (data) {
        });
    };
    AddSongComponent.prototype.onSubmit = function () {
        console.log(this.songGenure);
        // if(this.songName!=""&&this.songAlbum!=""&&this.songArtist!=""&&this.songYoutubeLink!=""&&this.songDesc!=""&&this.songGenure!=""){
        var newSong = { songName: this.songName, songAlbum: this.songAlbum, songArtist: this.songArtist, songYoutubeLink: this.songYoutubeLink, songDesc: this.songDesc, songGenure: this.songGenure, songImage: this.songImage, songPrice: this.songPrice };
        console.log(newSong);
        var url = "http://127.0.0.1:8000/song/add";
        this.httpVar.post(url, { songItem: newSong }).subscribe(function (data) { return function (data) {
            this.msgData = data;
            console.log(data);
        }; });
        // }
    };
    AddSongComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-song',
            template: __webpack_require__(/*! ./add-song.component.html */ "./src/app/add-song/add-song.component.html"),
            styles: [__webpack_require__(/*! ./add-song.component.css */ "./src/app/add-song/add-song.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AddSongComponent);
    return AddSongComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Music Lover | ICT';
        this.cart_count = 0;
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _song_details_song_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./song-details/song-details.component */ "./src/app/song-details/song-details.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _add_song_add_song_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./add-song/add-song.component */ "./src/app/add-song/add-song.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./cart.service */ "./src/app/cart.service.ts");
/* harmony import */ var _db_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./db.service */ "./src/app/db.service.ts");






// import RouterMOdule and Routes for routong


//import hhtpClient Module for listenig from a server




//import Form model 



var appRoutes = [
    { path: "", component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] },
    { path: "songdetails/:songLink", component: _song_details_song_details_component__WEBPACK_IMPORTED_MODULE_9__["SongDetailsComponent"] },
    { path: "cart", component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_10__["CartComponent"] },
    { path: "song/add", component: _add_song_add_song_component__WEBPACK_IMPORTED_MODULE_11__["AddSongComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _song_details_song_details_component__WEBPACK_IMPORTED_MODULE_9__["SongDetailsComponent"],
                _cart_cart_component__WEBPACK_IMPORTED_MODULE_10__["CartComponent"],
                _add_song_add_song_component__WEBPACK_IMPORTED_MODULE_11__["AddSongComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(appRoutes),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"]
            ],
            providers: [_cart_service__WEBPACK_IMPORTED_MODULE_13__["CartService"], _db_service__WEBPACK_IMPORTED_MODULE_14__["DbService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cart.service.ts":
/*!*********************************!*\
  !*** ./src/app/cart.service.ts ***!
  \*********************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CartService = /** @class */ (function () {
    function CartService() {
        this.cart = [];
        this.cart_total = 0;
        this.cart_count = 0;
    }
    CartService.prototype.addToCart = function (songLink, songName, songImage, songPrice) {
        console.log(songPrice);
        if (!this.isInCartUpdate(songLink, songPrice)) {
            var cartItem = { songLink: songLink, songName: songName, songImage: songImage, count: 1, songPrice: songPrice };
            this.cart.push(cartItem);
            this.cart_count = this.cart_count + 1;
            this.cart_total = this.cart_total + songPrice;
        }
        this.setLocarStorageCart();
    };
    CartService.prototype.minusFromCart = function (songLink, songPrice) {
        for (var index = 0; index < this.cart.length; ++index) {
            var cartItem = this.cart[index];
            if (cartItem.songLink == songLink) {
                cartItem.count = cartItem.count - 1;
                this.cart_total = this.cart_total - songPrice;
                if (cartItem.count == 0)
                    this.removeFromCart(songLink, songPrice);
            }
        }
        this.setLocarStorageCart();
    };
    CartService.prototype.removeFromCart = function (songLink, songPrice) {
        for (var index = 0; index < this.cart.length; ++index) {
            var cartItem = this.cart[index];
            if (cartItem.songLink == songLink) {
                //console.log(this.cart)
                this.cart_total = this.cart_total - (cartItem.count * songPrice);
                this.cart.splice(index, 1);
                //console.log(this.cart)
            }
        }
        this.setLocarStorageCart();
    };
    CartService.prototype.isInCartUpdate = function (songLink, songPrice) {
        //console.log(this.cart)
        var hasMatch = false;
        for (var index = 0; index < this.cart.length; ++index) {
            var cartItem = this.cart[index];
            if (cartItem.songLink == songLink) {
                hasMatch = true;
                cartItem.count = cartItem.count + 1;
                this.cart_total = this.cart_total + songPrice;
                //console.log(this.cart)
                break;
            }
        }
        return hasMatch;
    };
    CartService.prototype.setLocarStorageCart = function () {
        localStorage.setItem("cart", JSON.stringify(this.cart));
        localStorage.setItem("cart_total", String(this.cart_total));
    };
    CartService.prototype.getLocarStorageCart = function () {
        if (localStorage.getItem("cart")) {
            this.cart = JSON.parse(localStorage.getItem("cart"));
        }
    };
    CartService.prototype.getLocalStorageCartAmount = function () {
        if (localStorage.getItem("cart_total"))
            this.cart_total = parseInt(localStorage.getItem("cart_total"));
    };
    CartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CartService);
    return CartService;
}());



/***/ }),

/***/ "./src/app/cart/cart.component.css":
/*!*****************************************!*\
  !*** ./src/app/cart/cart.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item_count{\n    width: 50px;\n    margin-left: 10px;\n    margin-right: 10px;\n}\n.item_count_div .fa{\n    margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FydC9jYXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY2FydC9jYXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbV9jb3VudHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uaXRlbV9jb3VudF9kaXYgLmZhe1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/cart/cart.component.html":
/*!******************************************!*\
  !*** ./src/app/cart/cart.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main id=\"main\">\n<!--==========================\n  Cart Item showing section\n============================-->\n  <section id=\"speakers-details\" class=\"wow fadeIn\">\n    <div class=\"container\">\n      <div class=\"section-header\">\n        <h2>Cart</h2>\n        <p>Praesentium ut qui possimus sapiente nulla.</p>\n      </div>\n\n      \n      <div id=\"schedule\">\n        <div class=\"row schedule-item\" *ngFor=\"let cartItem of cart\">\n          <div class=\"col-md-2\">\n            <div class=\"speaker\">\n              <img src=\"../../assets/img/song/{{cartItem.songImage}}\" alt=\"Hubert Hirthe\">\n            </div>\n          </div>\n          <div class=\"col-md-7\">\n              \n            <h4>{{cartItem.songName}}</h4>\n          </div>\n          <div class=\"col-md-1\">\n            <p>{{cartItem.songPrice*cartItem.count}}</p>\n          </div>\n          <div class=\"col-md-2\">\n            <div class=\"item_count_div row\">\n              <i class=\"fa fa-minus\" (click)=\"minusFromCart(cartItem.songLink,cartItem.songPrice)\"></i>\n              <input type=\"number\" class=\"item_count\" value=\"{{cartItem.count}}\" readonly>\n              <i class=\"fa fa-plus\" (click)=\"addToCart(cartItem.songLink,cartItem.songName,cartItem.songImage,cartItem.songPrice)\"></i>\n            </div>\n            <div class=\"cart_remove row\">\n              <button class=\"btn btn-danger\" (click)=\"removeFromCart(cartItem.songLink,cartItem.songPrice)\">Remove</button>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"row schedule-item\">\n          <div class=\"col-md-7\">\n            Cart Total :\n          </div>\n          <div class=\"col-md-1\">\n            <p>{{cart_total}}</p>\n          </div>\n          <div class=\"col-md-2\">\n            <div class=\"cart_remove row\">\n              <button class=\"btn btn-info\" >Checkout</button>\n            </div>\n          </div>\n        </div>\n\n      </div>\n\n\n    </div>\n\n  </section>\n</main>\n      "

/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cart.service */ "./src/app/cart.service.ts");



var CartComponent = /** @class */ (function () {
    function CartComponent(cartSr) {
        this.cartSr = cartSr;
        this.cart_count = 0;
        this.cart_total = 0;
        this.cart = [];
    }
    CartComponent.prototype.ngOnInit = function () {
        this.cartSr.getLocarStorageCart();
        this.cartSr.getLocalStorageCartAmount();
        this.setCart();
        window.scrollTo(0, 0);
    };
    CartComponent.prototype.setCart = function () {
        this.cart = this.cartSr.cart;
        this.cart_count = this.cart.length;
        this.cart_total = this.cartSr.cart_total;
    };
    CartComponent.prototype.addToCart = function (songLink, songName, songImage, songPrice) {
        this.cartSr.addToCart(songLink, songName, songImage, songPrice);
        this.setCart();
    };
    CartComponent.prototype.minusFromCart = function (songLink, songPrice) {
        this.cartSr.minusFromCart(songLink, songPrice);
        this.setCart();
    };
    CartComponent.prototype.removeFromCart = function (songLink, songPrice) {
        this.cartSr.removeFromCart(songLink, songPrice);
        this.setCart();
    };
    CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.css */ "./src/app/cart/cart.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/db.service.ts":
/*!*******************************!*\
  !*** ./src/app/db.service.ts ***!
  \*******************************/
/*! exports provided: DbService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DbService", function() { return DbService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DbService = /** @class */ (function () {
    function DbService() {
    }
    DbService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DbService);
    return DbService;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "   <!--==========================\n    Footer\n  ============================-->\n  <footer id=\"footer\">\n      <div class=\"footer-top\">\n        <div class=\"container\">\n          <div class=\"row\">\n  \n            <div class=\"col-lg-3 col-md-6 footer-info\">\n              <img src=\"/client/src/assets/img/logo.png\" alt=\"TheEvenet\">\n              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consequat sit amet leo quis commodo. Vestibulum luctus in eros auctor dignissim. Proin a dolor a orci ornare gravida. Ut pellentesque ex sapien, ac hendrerit mi porta ac. Nulla sed nisi viverra, imperdiet dolor eget, convallis nisl.  </p>\n            </div>\n  \n            <div class=\"col-lg-3 col-md-6 footer-links\">\n              <h4>Useful Links</h4>\n              <ul>\n                <li><i class=\"fa fa-angle-right\"></i> <a href=\"#\">Home</a></li>\n                <li><i class=\"fa fa-angle-right\"></i> <a href=\"#\">About us</a></li>\n                <li><i class=\"fa fa-angle-right\"></i> <a href=\"#\">Services</a></li>\n                <li><i class=\"fa fa-angle-right\"></i> <a href=\"#\">Terms of service</a></li>\n                <li><i class=\"fa fa-angle-right\"></i> <a href=\"#\">Privacy policy</a></li>\n              </ul>\n            </div>\n  \n            <div class=\"col-lg-3 col-md-6 footer-links\">\n              <h4>Useful Links</h4>\n              <ul>\n                <li><i class=\"fa fa-angle-right\"></i> <a href=\"#\">Home</a></li>\n                <li><i class=\"fa fa-angle-right\"></i> <a href=\"#\">About us</a></li>\n                <li><i class=\"fa fa-angle-right\"></i> <a href=\"#\">Services</a></li>\n                <li><i class=\"fa fa-angle-right\"></i> <a href=\"#\">Terms of service</a></li>\n                <li><i class=\"fa fa-angle-right\"></i> <a href=\"#\">Privacy policy</a></li>\n              </ul>\n            </div>\n  \n            <div class=\"col-lg-3 col-md-6 footer-contact\">\n              <h4>Contact Us</h4>\n              <p>\n                Deepu TG <br>\n                #########<br>\n                India<br>\n                <strong>Phone:</strong> <br>\n                <strong>Email:</strong> deeputg1992@gmail.com<br>\n              </p>\n  \n              <div class=\"social-links\">\n                <a href=\"#\" class=\"twitter\"><i class=\"fa fa-twitter\"></i></a>\n                <a href=\"#\" class=\"facebook\"><i class=\"fa fa-facebook\"></i></a>\n                <a href=\"#\" class=\"instagram\"><i class=\"fa fa-instagram\"></i></a>\n                <a href=\"#\" class=\"google-plus\"><i class=\"fa fa-google-plus\"></i></a>\n                <a href=\"#\" class=\"linkedin\"><i class=\"fa fa-linkedin\"></i></a>\n              </div>\n  \n            </div>\n  \n          </div>\n        </div>\n      </div>\n  \n      <div class=\"container\">\n        <div class=\"copyright\">\n          &copy; Copyright <strong>Music Lovers</strong>. All Rights Reserved\n        </div>\n        <div class=\"credits\">\n          <!--\n            All the links in the footer should remain intact.\n            You can delete the links only if you purchased the pro version.\n            Licensing information: https://bootstrapmade.com/license/\n            Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=TheEvent\n          -->\n          Designed by <a href=\"https://bootstrapmade.com/\">BootstrapMade</a>\n        </div>\n      </div>\n    </footer><!-- #footer -->"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!--==========================\n    Header\n  ============================-->\n  <header id=\"header\">\n      <div class=\"container\">\n  \n        <div id=\"logo\" class=\"pull-left\">\n          <!-- Uncomment below if you prefer to use a text logo -->\n          <!-- <h1><a href=\"#main\">C<span>o</span>nf</a></h1>-->\n          <a routerLink=\"/\" class=\"scrollto navbar-brand\"><img src=\"../../assets/img/logo.png\" alt=\"\" title=\"\">\n            &nbsp;&nbsp;Music Lovers\n          </a>\n        </div>\n  \n        <nav id=\"nav-menu-container\">\n          <ul class=\"nav-menu\">\n            <li class=\" menu-active\"><a routerLink=\"\">Home</a></li>\n            <li><a routerLink=\"\" >About</a></li>\n\n            <li class=\"dropdown\">\n                <a class=\"dropdown-toggle\"\n                   data-toggle=\"dropdown\"\n                   href=\"#\">\n                   Songs\n                    <b class=\"caret\"></b>\n                  </a>\n                <ul class=\"dropdown-menu\">\n                    <li><a routerLink=\"\">Songs Home</a></li>\n                    <li><a routerLink=\"/song/add\">Add Song</a></li>\n                </ul>\n              </li>\n\n              <li class=\"dropdown\">\n                  <a class=\"dropdown-toggle\"\n                     data-toggle=\"dropdown\"\n                     href=\"#\">\n                     Genres\n                      <b class=\"caret\"></b>\n                    </a>\n                  <ul class=\"dropdown-menu\">\n                      <li><a routerLink=\"\">Genres</a></li>\n                      <li><a href=\"/genure/add\">Add Genre</a></li>\n                  </ul>\n                </li>              \n            <li><a routerLink=\"\">Contact</a></li>\n            \n            \n\n          </ul>\n        </nav><!-- #nav-menu-container -->\n      </div>\n      \n    </header><!-- #header -->"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a routerLink=\"cart\" class=\"shopping-cart\">\n  <!-- <i class=\"fa fa-envelope fa-5x fa-border icon-grey badge\">5</i> -->\n  <i class=\"fa fa-shopping-cart\"> <span class=\"cart_count\">{{cart_count}}</span> </i>\n</a>\n    <!--==========================\n    Intro Section\n  ============================-->\n  <section id=\"intro\">\n    <div class=\"intro-container wow fadeIn\">\n      <h1 class=\"mb-4 pb-0\">The ICT<br><span>Music Lover</span> Portal</h1>\n      <p class=\"mb-4 pb-0\">“Music is like a dream. One that I cannot hear.” ―  Ludwig van Beethoven</p>\n      \n      <a href=\"#about\" class=\"about-btn scrollto\">About Us</a>\n    </div>\n  </section>\n\n<main id=\"main\">\n  <!--==========================\n        About Section\n      ============================-->\n      <section id=\"about\">\n          <div class=\"container\">\n            <div class=\"row\">\n              <div class=\"col-lg-8\">\n                <h2>About The Music Lovers Portal</h2>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque urna ante, eleifend non accumsan ut, fermentum eu purus. Morbi euismod eu sem at pulvinar. Nullam purus orci, blandit eget faucibus vitae, commodo ut odio. Vivamus vel ex at leo euismod placerat eget condimentum odio. Nunc elementum, nisi quis aliquet dapibus, arcu nibh aliquam massa, non mollis eros felis sed mi. Donec laoreet lorem vehicula sem viverra egestas.  </p>\n              </div>\n              <div class=\"col-lg-4\">\n                \n              </div>\n            </div>\n          </div>\n        </section>\n<!-- Songs HOme Section -->\n<section id=\"songs\" class=\"wow fadeInUp\">\n  <div class=\"container\">\n    <div class=\"section-header\">\n      <h2>Our Collection</h2>\n      <p>Here are some of our Songs</p>\n    </div>\n\n    <div class=\"row\">\n      \n        <div class=\"col-lg-4 col-md-6\" *ngFor=\"let song of songData\">\n            <div class=\"speaker\">\n\n                <img class=\"img-fluid\" src=\"../../assets/img/song/{{song.songImage}}\" alt=\"\">\n                <div class=\"details\">\n                      <h3><a routerLink=\"songdetails/{{song.songLink}}\">{{song.songName}}</a></h3>\n                    <p>Artist : {{song.songArtist}}</p>\n                    <p> <a class=\"btn btn-info\" (click)=\"addToCart(song.songLink,song.songName,song.songImage,song.price)\"><i class=\"fa fa-plus\"> </i>Add to cart</a></p>\n                    <div class=\"social\">\n                     \n                      \n                    </div>\n                </div>  \n                </div> \n                </div>  \n    \n\n</div>\n</div>\n\n</section>\n\n<!-- songs section ends -->\n\n  \n  </main>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cart.service */ "./src/app/cart.service.ts");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(httpVar, cartSr) {
        this.httpVar = httpVar;
        this.cartSr = cartSr;
        this.cart_count = 0;
        this.cart_total = 0;
        this.cart = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var homelink = "home";
        //let homelink = "http://127.0.0.1:8000/home";
        this.httpVar.get(homelink).subscribe(function (data) {
            _this.songData = data;
        });
        this.cartSr.getLocarStorageCart();
        this.cartSr.getLocalStorageCartAmount();
        this.setCart();
        window.scrollTo(0, 0);
    };
    HomeComponent.prototype.setCart = function () {
        this.cart = this.cartSr.cart;
        this.cart_count = this.cart.length;
        this.cart_total = this.cartSr.cart_total;
    };
    HomeComponent.prototype.addToCart = function (songLink, songName, songImage, songPrice) {
        this.cartSr.addToCart(songLink, songName, songImage, songPrice);
        this.setCart();
    };
    HomeComponent.prototype.minusFromCart = function (songLink, songPrice) {
        this.cartSr.minusFromCart(songLink, songPrice);
        this.setCart();
    };
    HomeComponent.prototype.removeFromCart = function (songLink, songPrice) {
        this.cartSr.removeFromCart(songLink, songPrice);
        this.setCart();
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/song-details/song-details.component.css":
/*!*********************************************************!*\
  !*** ./src/app/song-details/song-details.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NvbmctZGV0YWlscy9zb25nLWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/song-details/song-details.component.html":
/*!**********************************************************!*\
  !*** ./src/app/song-details/song-details.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "      <main id=\"main\" class=\"main-page\">\n          <!--==========================\n            Speaker Details Section\n          ============================-->\n          <section id=\"speakers-details\" class=\"wow fadeIn\">\n            <div class=\"container\">\n              <div class=\"section-header\">\n                <h2>Song Details</h2>\n                <p>Praesentium ut qui possimus sapiente nulla.</p>\n              </div>\n              \n              <div class=\"row\">\n                <div class=\"col-md-6\">\n                      <div class=\"row\">\n                  <img src=\"../../assets/img/song/{{songData.songImage}}\" alt=\"Speaker 1\" class=\"img-fluid\">\n                  </div>\n                  <div class=\"container p-3\">\n                          <div  class=\"center-block text-center\">\n                      <a href=\"/song/edit/{{songData.songLink}}\">\n                          <button type=\"button\" class=\"btn btn-info m-3\">Edit</button>\n                          </a>\n                          <button type=\"button\" class=\"btn btn-danger\"  data-toggle=\"modal\" data-target=\"#deleteSongModal\" >Delete</button>\n                  </div>\n                  </div>\n                </div>\n      \n                <div class=\"col-md-6\">\n                  <div class=\"details\">\n                    <h2>{{songData.songName}}</h2>\n                   <ul>\n                       <li>Album : {{songData.songAlbum}}</li>\n                       <li>Artist :{{songData.songArtist}}</li>\n                  </ul>\n                  {{songData.songDesc}}\n                  <iframe width=\"560\" height=\"315\" src=\"{{songData.songYoutubeLink}}\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n              </div>\n                </div>\n                \n              </div>\n              <!-- Modal -->\n  <div class=\"modal fade\" id=\"deleteSongModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n          <div class=\"modal-dialog\" role=\"document\">\n              <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                  <h5 class=\"modal-title\" id=\"exampleModalLabel\">Are you Sure?</h5>\n                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                  <span aria-hidden=\"true\">&times;</span>\n                  </button>\n              </div>\n              <div class=\"modal-body\">\n                  Are you sure you wanna delete the song \"<%=songData[i].songName%>\" from the system?\n              </div>\n              <div class=\"modal-footer\">\n                  <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\"> Cancel </button>\n                  <a href=\"/song/delete/<%=songData[i].songLink%>\">\n                  <button type=\"button\" class=\"btn btn-primary\"> Delete! </button>\n                  </a>\n              </div>\n              </div>\n          </div>\n      </div>\n              \n            </div>\n      \n          </section>\n      \n        </main>\n "

/***/ }),

/***/ "./src/app/song-details/song-details.component.ts":
/*!********************************************************!*\
  !*** ./src/app/song-details/song-details.component.ts ***!
  \********************************************************/
/*! exports provided: SongDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongDetailsComponent", function() { return SongDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var SongDetailsComponent = /** @class */ (function () {
    function SongDetailsComponent(actiRoute, locVar, httpVar) {
        this.actiRoute = actiRoute;
        this.locVar = locVar;
        this.httpVar = httpVar;
    }
    SongDetailsComponent.prototype.ngOnInit = function () {
        this.getDetails(this.actiRoute.snapshot.paramMap.get('songLink'));
        window.scrollTo(0, 0);
    };
    SongDetailsComponent.prototype.getDetails = function (songLink) {
        var _this = this;
        this.httpVar.get('song/detail/' + songLink).subscribe(function (data) {
            _this.songData = data[0];
            console.log(data[0]);
        });
    };
    SongDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-song-details',
            template: __webpack_require__(/*! ./song-details.component.html */ "./src/app/song-details/song-details.component.html"),
            styles: [__webpack_require__(/*! ./song-details.component.css */ "./src/app/song-details/song-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], SongDetailsComponent);
    return SongDetailsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/deepu/Deepu/heroku/project/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map