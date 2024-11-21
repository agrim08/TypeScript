let a: number = 10;

if (a < 18) {
  a += 1;
}

//* data types:
let sales = 123_456_789;
let course = "TypeScript";
let level;

// function render(document) {
//   console.log(document);
// }
//*we can explicitly decalre "document : any" or we can turn the "noImplicitAny : false" but don't do that

let numbers: number[] = [1, 2, 3]; //true];
//these all methods are give by typescript:
numbers.forEach((n) => n.toFixed);
numbers.forEach((n) => n.toExponential);
numbers.forEach((n) => n.toPrecision);
numbers.forEach((n) => n.toLocaleString);

//tuples:
let tuple1: [number, string] = [1, "any String"]; //it has fixed length
tuple1.push(1); //issue in TS
console.log(tuple1);

//enum:
enum Size {
  small,
  medium = 2,
  large = 3,
}
let small: Size = Size.small;
console.log(small);

//functions:
function Tax(income: number, taxYear = 2022): number {
  if (taxYear < 2022) {
    return income * 1.2 - income;
  }
  return income * 1.4 - income;
}

console.log(Tax(20_000));

//Objects:

let employee: {
  readonly id: number;
  Name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  Name: "Agrim",
  retire: (date) => {
    console.log(date);
  },
};

//Type aliases better way to create objects:
type Employee = {
  readonly id: number;
  Name: string;
  retire: (date: Date) => void;
};

let emp: Employee = {
  id: 1,
  Name: "Agrim",
  retire: (date) => {
    console.log(date);
  },
};

//union:
function weight(weight: number | string): number {
  if (typeof weight === "number") return weight * 2.2;
  else return parseInt(weight) * 2.2;
}

console.log(weight(10));
console.log(weight("10"));

//intersection:
type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIwidget = Draggable & Resizable;

let textBox: UIwidget = {
  drag: () => {},
  resize: () => {},
};

//literals:
type Quantity = 100 | 50;
let quan: Quantity = 100;

type Metric = "cm" | "inch";
let metric: Metric = "inch";

//nullable:
function greet(name: string | null | undefined) {
  if (name) {
    console.log(`hello and welcome ${name}`);
  } else console.log(`have some name`);
}

greet(null);
