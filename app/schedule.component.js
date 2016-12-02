System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var schedule;
    return {
        setters:[],
        execute: function() {
            schedule = (function () {
                function schedule(date, title, time, notes) {
                    this.date = date;
                    this.title = title;
                    this.time = time;
                    this.notes = notes;
                }
                return schedule;
            }());
            exports_1("schedule", schedule);
        }
    }
});
//# sourceMappingURL=schedule.component.js.map