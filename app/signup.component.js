System.register(['angular2/core', './authentication.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, authentication_service_1;
    var SignupComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (authentication_service_1_1) {
                authentication_service_1 = authentication_service_1_1;
            }],
        execute: function() {
            SignupComponent = (function () {
                function SignupComponent(_service) {
                    this._service = _service;
                    this.user = new authentication_service_1.User('', '');
                    this.errorMsg = '';
                }
                SignupComponent.prototype.signUp = function () {
                    if (this.user.password !== this.user.passwordConfirm) {
                        alert("incorrect password");
                    }
                    else {
                        this._service.createNewUserFromSignUp(this.user.email, this.user.password);
                    }
                };
                SignupComponent = __decorate([
                    core_1.Component({
                        selector: 'signup-form',
                        providers: [authentication_service_1.AuthenticationService],
                        template: "\n        <div class=\"container\" >\n            <div class=\"title\">\n                Welcome - Please Register\n            </div>\n            <div class=\"panel-body\">\n                <div class=\"row\">\n                    <div class=\"input-field col s12\">\n                        <input [(ngModel)]=\"user.email\" id=\"email\"\n                            type=\"email\" class=\"validate\">\n                        <label for=\"email\">Email</label>\n                    </div>\n                </div>\n\n                <div class=\"row\">\n                    <div class=\"input-field col s12\">\n                        <input [(ngModel)]=\"user.password\" id=\"password\"\n                            type=\"password\" class=\"validate\">\n                        <label for=\"password\">Password</label>\n                    </div>\n                    <div class=\"input-field col s12\">\n                        <input [(ngModel)]=\"user.passwordConfirm\" id=\"passwordConfirm\"\n                            type=\"password\" class=\"validate\">\n                        <label for=\"password\">Re-enter to confirm password</label>\n                    </div>\n                </div>\n\n                <span>{{errorMsg}}</span>\n                <button (click)=\"signUp()\"\n                    class=\"btn waves-effect waves-light\"\n                    type=\"submit\" name=\"action\">Sign Up</button>\n            </div>\n        </div>\n    \t"
                    }), 
                    __metadata('design:paramtypes', [authentication_service_1.AuthenticationService])
                ], SignupComponent);
                return SignupComponent;
            }());
            exports_1("SignupComponent", SignupComponent);
        }
    }
});
//# sourceMappingURL=signup.component.js.map