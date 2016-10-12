"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//angular component
var core_1 = require('@angular/core');
//decorator
/*
* templateurl: 'home/home.html' is how you would load a html template fyi, looks like an http request??
*/
//DITCHES controllers and focuses on compoenents
var AppComponent = (function () {
    function AppComponent() {
        this.message = 'Hello!';
        this.users = [
            {
                id: 2,
                name: 'second',
                username: 'secondsone'
            },
            {
                id: 3,
                name: 'third',
                username: 's3sone'
            },
            {
                id: 4,
                name: 'n4',
                username: '4onesone'
            }
        ];
    }
    AppComponent.prototype.selectUser = function (user) {
        this.activeUser = user;
        console.log(this.activeUser);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n\t\t<header>\n\t\t\t<nav class=\"navbar navbar-inverse\">\n\t\t\t\t<div class=\"navbar-header\">\n\t\t\t\t\t<a href=\"/\" class=\"navbar-brand\">My Angular 2 app</a>\n\t\t\t\t</div>\n\t\t\t</nav>\n\t\t</header>\n\t\t<main>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-sm-4\">\n\n\t\t\t\t\t<h2> USERS ARRAY </h2>\n\t\t\t\t\t<ul class=\"list-group users-list\">\n\t\t\t\t\t\t<li class=\"list-group-item\"\n\t\t\t\t\t\t\t*ngFor=\"let user of users\"\n\t\t\t\t\t\t\t(click)=\"selectUser(user)\"\n\t\t\t\t\t\t\t[class.active]=\"user === activeUser\"\n\t\t\t\t\t\t> \n\t\t\t\t\t\t\t{{user.name}} || {{user.username}} \n\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-8\">\n\t\t\t\t\t<div class=\"jumbotron\"\n\t\t\t\t\t\t*ngIf=\"activeUser\">\n\t\t\t\t\t\t<h2>{{activeUser.name}} <small>{{activeUser.username}}</small></h2>\n\n\t\t\t\t\t\t<input class=\"form-control\" [(ngModel)]=\"activeUser.name\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"jumbotron gocrazy\" *ngIf=\"!activeUser\">\n\t\t\t\t\t\t<span class=\"glyphicon glyphicon-hand-left\"></span>\n\t\t\t\t\t\t<h2>Choose a user</h2>\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</main>\n\t\t<footer class=\"text-center\">\n\t\t\tCopyright 2016\n\t\t</footer>\n\t",
            styles: ["\n\t\t.jumbotron { box-shadow: 0 2px 0 rgba(0,0,0, 0.2); }\n\t\t.users-list li {\n\t\t\tcursor: pointer;\n\t\t}\n\t"]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map