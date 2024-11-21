var a = 10;
if (a < 18) {
    a += 1;
}
// console.log(a);
//* data types:
var sales = 123456789;
var course = "TypeScript";
var level;
// function render(document) {
//   console.log(document);
// }
//*we can explicitly decalre "document : any" or we can turn the "noImplicitAny : false" but don't do that
var numbers = [1, 2, 3]; //true];
//these all methods are give by typescript:
numbers.forEach(function (n) { return n.toFixed; });
numbers.forEach(function (n) { return n.toExponential; });
numbers.forEach(function (n) { return n.toPrecision; });
numbers.forEach(function (n) { return n.toLocaleString; });
//tuples:
var tuple1 = [1, "any String"]; //it has fixed length
tuple1.push(1); //issue in TS
console.log(tuple1);
