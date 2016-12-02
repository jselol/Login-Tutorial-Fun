System.register(['angular2/core', './schedule'], function(exports_1, context_1) {
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
    var core_1, schedule_1;
    var UserscheduleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (schedule_1_1) {
                schedule_1 = schedule_1_1;
            }],
        execute: function() {
            UserscheduleComponent = (function () {
                function UserscheduleComponent() {
                    this.schedule = [
                        new schedule_1.Schedule("Dr. Appointment", "Wed Nov 12, 2017", "8:30", "bring medication")
                    ];
                }
                UserscheduleComponent = __decorate([
                    core_1.Component({
                        selector: 'userschedule-form',
                        inputs: ['schedule'],
                        template: "\n        <div class=\"container\" >\n            <div class=\"title\">\n                Today's schedule (insert date here? dymaically of course you noob!)\n            </div>\n            <div class=\"panel-body\">\n                <div class=\"row\">\n                  <table class=\"table table-hover\">\n                      <thead>\n                          <tr>\n                              <td>Title</td>\n                              <td>date</td>\n                              <td>time</td>\n                              <td>notes</td>\n                          </tr>\n                      </thead>\n                      <tbody>\n                          <tr *ngFor=\"#tasks of schedule\">\n                            <td>{{tasks.title}}</td>\n                            <td>{{tasks.date}}</td>\n                            <td>{{tasks.time}}</td>\n                            <td>{{tasks.notes}}</td>\n                          </tr>\n                      </tbody>\n                  </table>\n                </div>\n            </div>\n        </div>\n    \t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], UserscheduleComponent);
                return UserscheduleComponent;
            }());
            exports_1("UserscheduleComponent", UserscheduleComponent);
        }
    }
});
//# sourceMappingURL=userschedule.component.js.map