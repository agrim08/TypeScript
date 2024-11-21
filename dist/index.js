"use strict";
let a = 10;
if (a < 18) {
    a += 1;
}
let sales = 123456789;
let course = "TypeScript";
let level;
let numbers = [1, 2, 3];
numbers.forEach((n) => n.toFixed);
numbers.forEach((n) => n.toExponential);
numbers.forEach((n) => n.toPrecision);
numbers.forEach((n) => n.toLocaleString);
let tuple1 = [1, "any String"];
tuple1.push(1);
console.log(tuple1);
var Size;
(function (Size) {
    Size[Size["small"] = 0] = "small";
    Size[Size["medium"] = 2] = "medium";
    Size[Size["large"] = 3] = "large";
})(Size || (Size = {}));
let small = Size.small;
console.log(small);
function Tax(income, taxYear = 2022) {
    if (taxYear < 2022) {
        return income * 1.2 - income;
    }
    return income * 1.4 - income;
}
console.log(Tax(20000));
let employee = {
    id: 1,
    Name: "Agrim",
    retire: (date) => {
        console.log(date);
    },
};
let emp = {
    id: 1,
    Name: "Agrim",
    retire: (date) => {
        console.log(date);
    },
};
function weight(weight) {
    if (typeof weight === "number")
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
console.log(weight(10));
console.log(weight("10"));
//# sourceMappingURL=index.js.map