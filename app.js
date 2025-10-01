// khai bao bien toan cuc
let a = 10;// global  scope
function test(){
    let b = 15; // function scope
    if(true){
        let c = 30;// block scope
        console.log(a, b, c);

    }
    console.log(a,b);
}
test();

// hoisting
console.log(x);
var x = 5;
console.log(x);
let y = 10;
sayHi();
function sayHi(){
    console.log("Hello");
}

//closure
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}

const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

function readFileFake(path, cb) {
  setTimeout(() => cb(null, `Nội dung: ${path}`), 500); // mô phỏng IO
}
readFileFake("data.txt", (err, data) => {
  if (err) return console.error(err);
  console.log(data);
});

function TestFunction(){
    let a = 4;
    return a*a;
    
    
}
console.log(TestFunction());

function TestFunction(){
    return a*a;
}
function TestFunction2(){
    a = 4;
}
console.log(TestFunction2);

function myCounter() {
  let counter = 0;
  return function() {
    counter++;
    return counter;
  };
}
const add = myCounter();
add();
add();
add();
console.log(add);
// the counter is now 3