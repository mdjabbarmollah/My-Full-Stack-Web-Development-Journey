"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Day;
(function (Day) {
    Day[Day["Monday"] = 0] = "Monday";
    Day[Day["Tuesday"] = 1] = "Tuesday";
    Day[Day["Wednesday"] = 2] = "Wednesday";
    Day[Day["Thursday"] = 3] = "Thursday";
    Day[Day["Friday"] = 4] = "Friday";
    Day[Day["Saturday"] = 5] = "Saturday";
    Day[Day["Sunday"] = 6] = "Sunday";
})(Day || (Day = {}));
let offDay = Day.Friday;
console.log(Day.Thursday);
if (offDay === Day.Friday || offDay === Day.Friday) {
    console.log("today is holiday");
}
var Fahad;
(function (Fahad) {
    Fahad["Admin"] = "Admin";
    Fahad["moderator"] = "Moderator";
})(Fahad || (Fahad = {}));
console.log(Fahad.Admin);
const nandu = {
    name: 'chandu',
    role: Fahad.moderator
};
console.log(nandu);
//# sourceMappingURL=enum.js.map