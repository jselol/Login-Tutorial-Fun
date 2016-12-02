System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Schedule;
    return {
        setters:[],
        execute: function() {
            Schedule = (function () {
                function Schedule(title, date, time, notes) {
                    this.date = date;
                    this.title = title;
                    this.time = time;
                    this.notes = notes;
                }
                return Schedule;
            }());
            exports_1("Schedule", Schedule);
        }
    }
});
//# sourceMappingURL=schedule.js.map