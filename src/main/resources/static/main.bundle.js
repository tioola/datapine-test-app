webpackJsonp([1],{

/***/ "./src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./src async recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\" style=\"height:80px;\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"#\">\n        <img src=\"../assets/logo-bl.png\">\n        <span style=\"color:#a0da52\">Challenge</span>\n        <span>- Logo will bring you back to the login page</span>\n      </a>\n      \n    </div>\n    <div>\n      \n    </div>\n\n  </div>\n</nav>\n\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_item_service__ = __webpack_require__("./src/app/services/item.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_item_list_item_list_component__ = __webpack_require__("./src/app/components/item-list/item-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_component__ = __webpack_require__("./src/app/auth/auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_login_service__ = __webpack_require__("./src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_welcome_welcome_component__ = __webpack_require__("./src/app/components/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_user_edit_user_edit_component__ = __webpack_require__("./src/app/components/user-edit/user-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_user_list_user_list_component__ = __webpack_require__("./src/app/components/user-list/user-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_api_service__ = __webpack_require__("./src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var appRoutes = [
    { path: 'users', component: __WEBPACK_IMPORTED_MODULE_8__components_user_list_user_list_component__["a" /* UserListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_auth_component__["a" /* AuthGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_4__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'items', component: __WEBPACK_IMPORTED_MODULE_1__components_item_list_item_list_component__["a" /* ItemListComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__components_welcome_welcome_component__["a" /* WelcomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_auth_component__["a" /* AuthGuard */]] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_user_list_user_list_component__["a" /* UserListComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_user_edit_user_edit_component__["a" /* UserEditComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_welcome_welcome_component__["a" /* WelcomeComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_1__components_item_list_item_list_component__["a" /* ItemListComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_12__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_9__services_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_3__services_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_0__services_item_service__["a" /* ItemService */],
            __WEBPACK_IMPORTED_MODULE_2__auth_auth_component__["a" /* AuthGuard */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/auth/auth.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_login_service__ = __webpack_require__("./src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(loginService, router) {
        this.loginService = loginService;
        this.router = router;
    }
    AuthGuard.prototype.canActivateChild = function (childRoute, state) {
        return this.canActivate(childRoute, state);
    };
    AuthGuard.prototype.canActivate = function (route, state) {
        if (this.loginService.isUserLogged()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_login_service__["a" /* LoginService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.component.js.map

/***/ }),

/***/ "./src/app/components/item-list/item-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".menu button{\n    margin-top: 40px;\n    font-weight: bold;\n    size: 100px;\n    font-size: 40px;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/components/item-list/item-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-3\">\n        <div class=\"row menu\">\n            <div class=\"col-md-1\"></div>\n            <div class=\"col-md-3\">\n                <button type=\"button\" routerLink=\"/users\" class=\"btn btn-success\">Users</button>\n            </div>\n        </div>\n        <div class=\"row menu\">\n            <div class=\"col-md-1\"></div>\n            <div class=\"col-md-3\">\n                <button type=\"button\" routerLink=\"/items\" class=\"btn btn-success\">Items</button>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-1\"></div>\n            <div class=\"col-md-3\">\n                <a href=\"/api/logout\" style=\"font-size:40px\">Logout</a>\n            </div>\n        </div>\n\n    </div>\n    <div class=\"col-md-6\">\n\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">Can you see the ACL ITEM? if not you are not admin and cannot manipulate this domain :(</div>\n            <div class=\"panel-body\">\n                <table class=\"table\">\n                    <thead>\n                        <tr>\n                            <th>Id</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr (click)=\"selectUser(user)\">\n                            <td>{{items.id}}</td>\n                            <td>{{items.description}}</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-3\"></div>\n</div>"

/***/ }),

/***/ "./src/app/components/item-list/item-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_item_service__ = __webpack_require__("./src/app/services/item.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemListComponent = (function () {
    function ItemListComponent(itemService) {
        this.itemService = itemService;
    }
    ItemListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.itemService.getAll().subscribe(function (response) {
            _this.items = response.json();
        });
    };
    return ItemListComponent;
}());
ItemListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* Component */])({
        selector: 'app-item-list',
        styles: [__webpack_require__("./src/app/components/item-list/item-list.component.css")],
        template: __webpack_require__("./src/app/components/item-list/item-list.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_item_service__["a" /* ItemService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_item_service__["a" /* ItemService */]) === "function" && _a || Object])
], ItemListComponent);

var _a;
//# sourceMappingURL=item-list.component.js.map

/***/ }),

/***/ "./src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn{\n    margin-top: 20px;\n}\n\n.input-group{\n    width: 100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-3\">\n\n</div>\n\n<div class=\"col-md-6\">\n    <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">Login</div>\n        <div class=\"panel-body\">\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <div class=\"input-group\">\n                        <label for=\"email\">Email</label>\n                        <input type=\"text\" id=\"email\" [(ngModel)]=\"email\" class=\"form-control\" aria-describedby=\"basic-addon2\">\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <div class=\"input-group\">\n                        <label for=\"password\">Password</label>\n                        <input type=\"password\" [(ngModel)]=\"password\" id=\"password\" class=\"form-control\" aria-describedby=\"basic-addon2\">\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <span class=\"label label-danger\" *ngIf=\"errorMessage != ''\">{{errorMessage}}</span>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <input type=\"button\" (click)=\"login()\" class=\"btn btn-default\" value=\"Login\"/>\n                </div>                \n            </div>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <h2>Read ME</h2>\n       <p> Default user to Login : user=user@gmail.com / pass=123 </p>\n       <p> <span style=\"color: red; font-weight:bold;\">User admin to test ACL: user=admin@gmail.com / pass=123</span> </p>\n\n       <p> <span style=\"color: red; font-weight:bold;\">To Test ACL log in as admin and check if the item appear for you (Log as a normal user to confirm if the item does not appear for ROLE_USER)</span> </p>\n        <p> <span style=\"color: green; font-weight:bold;\">After Login you can check the api's json return directly in </span> </p>\n       \n        <ul>\n            <li><a href=\"/api/users\">http://localhost:8080/api/users</a></li>\n            <li><a href=\"/api/items\">http://localhost:8080/api/items</a></li>\n        </ul>\n        <p> <span style=\"color: blue; font-weight:bold;\">The front-end was made in angular 4, and is inside src/main/resources/angular-frontend/datapine-front</span> </p>\n        <p> <span style=\"color: blue; font-weight:bold;\">to build the front again please install angular 4 and run npm run build and replace static folder with what was generated in dist</span> </p>\n        \n        <h3>Please read my considerations about the project below: </h3>\n        <ul>\n            <li>\n                ++ Converted project to Spring boot.\n               \n            </li>\n            <li>\n                [x] Implement the UserDAO using JPA.\n                <span style=\"color: red\"> I Used JPARepository to generate the implementation  once the queries were simple, but there are also JPQL examples commented </span>\n            </li>\n            <li>\n                [x]  Implement the UserService using the UserDAO and transactions.\n                <span style=\"color: red\"> Service layer is responsible for calling the repository layer to pull the data </span>\n            </li>\n\n            <li>\n                [x]Implement a RESTful UserController to manage users.\n                <span style=\"color: red\">Used JSON and SPA to develop the challenge so all the data returned from the controller are JSON objects, the reason for that is that once this app would be suppose to deal with a lot of requests, we will be working only with lightweight responses (JSON) and we could also separate our Resources from the Frontend (this way we could have a webserver serving static content and separating the layers would be easier to tune the app )   </span>\n            </li>\n             <li>\n                [X] Implement a simple user login dialog to log in a user. Use HttpSession to store the user credentials to save time, Spring Security can also be used.\n\n                <span style=\"color: red\">Used spring security to authenticate and authorize the resources, you can find the information in WebSecurityConfig.java ( a simple login page in the SPA app was also created)</span>\n            </li>\n\n            <li>\n                [X] Use Spring AOP to log all login attempts via console output or log4j.\n                <span style=\"color: red\">SecurityAOP.java is working on it and also logging through LOG4J 2</span>\n            </li>\n\n             <li>\n                [X] In addition to securing the URLs, secure access to ItemDAO (has to be created alongside with Item domain) via spring security.\n                <span style=\"color: red\">Spring ACL is configured and you can find all the structure in data.sql</span>\n            </li>\n\n\n            <li>\n                [X]  Restrict ItemDAO access if the user is not authenticated by session. Filter any findBy~ and find a method within ItemDAO. ACL has to be used in order to secure domain.\n                <span style=\"color: red\">I created only one item to be used as example.</span>\n            </li>\n\n            <li>\n                [X]  You can either create an API or prepare jUnit tests for adding&viewing Item object (only authenticated users can insert and view objects).\n                <span style=\"color: red\">Authentication testes were created in test folder.</span>\n            </li>\n\n\n\n        </ul>\n\n    </div>\n</div>\n\n<div class=\"col-md-3\"></div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_login_service__ = __webpack_require__("./src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.errorMessage = "";
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        console.log(this.email);
        var login = this.loginService.login(this.email, this.password).subscribe(function (response) {
            console.log(response);
            _this.loginService.isLogged = response.ok;
            _this.router.navigate(['/users']);
        }, function (error) {
            _this.loginService.isLogged = false;
            _this.errorMessage = "Login failed!";
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_14" /* Component */])({
        selector: 'app-login',
        styles: [__webpack_require__("./src/app/components/login/login.component.css")],
        template: __webpack_require__("./src/app/components/login/login.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_login_service__["a" /* LoginService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "./src/app/components/user-edit/user-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".input-group{\n    width: 100%;\n}\n\nbutton{\n    margin-top: 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/components/user-edit/user-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\" >\n    <div class=\"panel-heading\">Create User</div>\n    <div class=\"panel-body\">\n        <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <div class=\"input-group\">\n                        <label for=\"email\">Email</label>\n                        <input type=\"text\" email #email=\"ngModel\" id=\"email\"  [(ngModel)]=\"user.email\" name=\"user.email\" class=\"form-control\" aria-describedby=\"basic-addon2\" />\n                        \n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <span class=\"label label-danger\" *ngIf=\"!email.valid && email.touched\" >Invalid email</span>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <div class=\"input-group\">\n                        <label for=\"password\">Password</label>\n                        <input type=\"password\" #password=\"ngModel\" id=\"password\" [(ngModel)]=\"user.password\" name=\"user.password\"  class=\"form-control\" aria-describedby=\"basic-addon2\">\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <div class=\"input-group\">\n                        <label for=\"password\">Confirm Password</label>\n                        <input type=\"password\"  #confirmPassword=\"ngModel\"  [(ngModel)]=\"user.newPassword\" name=\"user.newPassword\" id=\"confirmPassword\" class=\"form-control\" aria-describedby=\"basic-addon2\">\n                    </div>\n                </div>\n            </div>\n\n             <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <span class=\"label label-danger\" *ngIf=\"password.touched && confirmPassword.touched && password.value != confirmPassword.value \" >Password does not match</span>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <span class=\"label label-danger\" *ngIf=\"saveErrorMessage != ''\">{{saveErrorMessage}}</span>\n                </div>\n            </div>\n            \n            <div class=\"row\">\n\n                <div class=\"col-md-2\">\n                    <button type=\"submit\" [disabled]=\"!email.valid ||  password.value != confirmPassword.value || password.value == '' \" class=\"btn btn-default\">Save User</button>\n                </div>\n                <div class=\"col-md-1\">\n                    <button type=\"button\" (click)=\"close()\" class=\"btn btn-danger\">Close</button>\n                </div>                \n            </div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/user-edit/user-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserEditComponent = (function () {
    function UserEditComponent(userService) {
        this.userService = userService;
        this.event = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* EventEmitter */]();
        this.saveErrorMessage = "";
    }
    UserEditComponent.prototype.close = function () {
        this.event.emit('close');
    };
    UserEditComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (this.user.id != null && this.user.id != '') {
            this.userService.update(this.user).subscribe(function (response) {
                console.log(response);
                _this.event.emit('updated');
            });
        }
        else {
            this.userService.add(this.user).subscribe(function (reponse) {
                console.log(reponse.json());
                _this.event.emit('saved');
            }, function (error) {
                if (error.status == 409) {
                    _this.saveErrorMessage = "Email is already registered, please try another email.";
                }
                else {
                    _this.saveErrorMessage = "Unexpected error!";
                }
                console.log(error.status);
            });
        }
    };
    return UserEditComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["O" /* Input */])('user'),
    __metadata("design:type", Object)
], UserEditComponent.prototype, "user", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_5" /* Output */])('emitevent'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* EventEmitter */]) === "function" && _a || Object)
], UserEditComponent.prototype, "event", void 0);
UserEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* Component */])({
        selector: 'app-user-edit',
        styles: [__webpack_require__("./src/app/components/user-edit/user-edit.component.css")],
        template: __webpack_require__("./src/app/components/user-edit/user-edit.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_user_service__["a" /* UserService */]) === "function" && _b || Object])
], UserEditComponent);

var _a, _b;
//# sourceMappingURL=user-edit.component.js.map

/***/ }),

/***/ "./src/app/components/user-list/user-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".menu button{\n    margin-top: 40px;\n    font-weight: bold;\n    size: 100px;\n    font-size: 40px;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/components/user-list/user-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-3\">\n       <div class=\"row menu\">\n            <div class=\"col-md-1\"></div>\n            <div class=\"col-md-3\">\n                <button type=\"button\" routerLink=\"/users\" class=\"btn btn-success\">Users</button>\n            </div>\n        </div>\n        <div class=\"row menu\">\n            <div class=\"col-md-1\"></div>\n            <div class=\"col-md-3\">\n                <button type=\"button\" routerLink=\"/items\" class=\"btn btn-success\">Items</button>\n            </div>\n        </div>\n         \n        <div class=\"row\">\n            <div class=\"col-md-1\"></div>\n            <div class=\"col-md-3\">\n                <a href=\"/api/logout\" style=\"font-size:40px\">Logout</a>\n            </div>\n        </div>\n\n    </div>\n    <div class=\"col-md-6\">\n\n        <div class=\"panel panel-default\" *ngIf=\"userToBeEdited == null\">\n            <div class=\"panel-heading\">Users</div>\n            <div class=\"panel-body\">\n                <table class=\"table\">\n                    <thead>\n                        <tr>\n                            <th>Id</th>\n                            <th>Email</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let user of users\" (click)=\"selectUser(user)\">\n                            <td>{{user.id}}</td>\n                            <td>{{user.email}}</td>\n                        </tr>\n                    </tbody>\n                </table>\n\n                <div class=\"row\">\n                    <div class=\"col-md-3\">\n                        <button type=\"button\" (click)=\"prepareNewUser()\" class=\"btn btn-default\">New User</button>\n                    </div>\n                </div>\n            </div>\n\n\n\n        </div>\n\n\n        <app-user-edit (emitevent)=\"editOrSaveExecuted()\" [user]=\"userToBeEdited\" *ngIf=\"userToBeEdited != null\"></app-user-edit>\n    </div>\n\n    <div class=\"col-md-3\"></div>\n</div>"

/***/ }),

/***/ "./src/app/components/user-list/user-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserListComponent = (function () {
    function UserListComponent(userService) {
        this.userService = userService;
    }
    UserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getAll().subscribe(function (response) {
            _this.users = response.json();
        });
    };
    UserListComponent.prototype.selectUser = function (userToBeEdited) {
        this.userToBeEdited = userToBeEdited;
    };
    UserListComponent.prototype.prepareNewUser = function () {
        this.userToBeEdited = {
            email: '',
            password: '',
            confirmPassword: ''
        };
    };
    UserListComponent.prototype.editOrSaveExecuted = function () {
        var _this = this;
        this.userToBeEdited = null;
        this.userService.getAll().subscribe(function (response) {
            _this.users = response.json();
        });
    };
    return UserListComponent;
}());
UserListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* Component */])({
        selector: 'app-user-list',
        styles: [__webpack_require__("./src/app/components/user-list/user-list.component.css")],
        template: __webpack_require__("./src/app/components/user-list/user-list.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_user_service__["a" /* UserService */]) === "function" && _a || Object])
], UserListComponent);

var _a;
//# sourceMappingURL=user-list.component.js.map

/***/ }),

/***/ "./src/app/components/welcome/welcome.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/components/welcome/welcome.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Welcome Sir</h1>"

/***/ }),

/***/ "./src/app/components/welcome/welcome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var WelcomeComponent = (function () {
    function WelcomeComponent() {
    }
    return WelcomeComponent;
}());
WelcomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-welcome',
        styles: [__webpack_require__("./src/app/components/welcome/welcome.component.css")],
        template: __webpack_require__("./src/app/components/welcome/welcome.component.html")
    })
], WelcomeComponent);

//# sourceMappingURL=welcome.component.js.map

/***/ }),

/***/ "./src/app/services/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ApiService = (function () {
    function ApiService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });
    }
    ApiService.prototype.get = function (path) {
        return this.http.get(path)
            .finally(function () {
        });
    };
    ApiService.prototype.login = function (path, username, password) {
        var body = "username=" + username + "&password=" + password;
        var hed = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Headers */]();
        hed.append("Content-Type", "application/x-www-form-urlencoded");
        return this.http.request(path, {
            method: __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* RequestMethod */].Post,
            body: body,
            headers: hed,
            withCredentials: true
        });
    };
    ApiService.prototype.put = function (path, body, customHeaders) {
        return this.http.request(path, {
            method: __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* RequestMethod */].Put,
            body: body,
            headers: customHeaders || this.headers,
            withCredentials: true
        })
            .finally(function () {
        });
    };
    ApiService.prototype.delete = function (path) {
        return this.http.delete(path)
            .finally(function () {
        });
    };
    ApiService.prototype.post = function (path, body, customHeaders) {
        return this.http.request(path, {
            method: __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* RequestMethod */].Post,
            body: body,
            headers: customHeaders || this.headers,
            withCredentials: true
        })
            .finally(function () {
        });
    };
    return ApiService;
}());
ApiService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* Http */]) === "function" && _a || Object])
], ApiService);

var _a;
//# sourceMappingURL=api.service.js.map

/***/ }),

/***/ "./src/app/services/item.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_service__ = __webpack_require__("./src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemService = (function () {
    function ItemService(api) {
        this.api = api;
    }
    ItemService.prototype.getAll = function () {
        return this.api.get('/api/items');
    };
    return ItemService;
}());
ItemService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__api_service__["a" /* ApiService */]) === "function" && _a || Object])
], ItemService);

var _a;
//# sourceMappingURL=item.service.js.map

/***/ }),

/***/ "./src/app/services/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_service__ = __webpack_require__("./src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginService = (function () {
    function LoginService(apiService) {
        this.apiService = apiService;
        this.isLogged = false;
    }
    LoginService.prototype.login = function (username, password) {
        return this.apiService.login('/api/auth', username, password);
    };
    LoginService.prototype.isUserLogged = function () {
        return this.isLogged;
    };
    return LoginService;
}());
LoginService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__api_service__["a" /* ApiService */]) === "function" && _a || Object])
], LoginService);

var _a;
//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ "./src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_service__ = __webpack_require__("./src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = (function () {
    function UserService(api) {
        this.api = api;
    }
    UserService.prototype.getAll = function () {
        return this.api.get('/api/users');
    };
    UserService.prototype.add = function (user) {
        return this.api.post('/api/users', user);
    };
    UserService.prototype.update = function (user) {
        return this.api.put('/api/users', user);
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__api_service__["a" /* ApiService */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map