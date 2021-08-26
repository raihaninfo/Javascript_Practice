let add = (a, b) => {
  return a + b;
};

console.log(add(2, 3));

// let add2 = ()=>{

// }

let add2 = (a, b) => a + b;

console.log(add2(3, 5));

let sqr = (x) => x * x;

console.log(sqr(3));

let obj = {
  name: "md abu Raihan",
  print: function () {
    console.log(this);
  },
};

obj.print();

let number = (one, two) => one + two;

console.log(number(21, 22));

let javascript = {
  name: "javascript",
  libraries: ["React", "Angular", "Vue"],
  printLibraries: function () {
    this.libraries.forEach((a) => console.log(`${this.name} love ${a}`));
  },
};

javascript.printLibraries()