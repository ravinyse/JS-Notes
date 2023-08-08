//* features of JS - Dynamic in nature,Client-side scripting,supports functional programming,allows creation of event-listners and respond
//* to the user actions, supports asynchronous prog,can be executed both client and server-side using node.js, easily embedded into html docu.

//---------------------------------// todo: 1. variables---------------------------

// var a; //* This is called declararion
// a=10 //* This is called intialisation
// var a=10//* this is redeclare
// a=20//* reassign
// console.log(a)

//* ---------------------------------------------------
// var name1 = 'Ravi'
// let name2 = 'Kumar'
// const name3 = 'Rama'
// console.log(name1)
// console.log(name2)
// console.log(name3)

//?----------------------------------------------------
// var a;

// console.log("a ---->", a)

// let b = prompt()
// console.log(b);

//? --------------------------------------------
// var age;

// console.log(age);
// var age = 20
// console.log(age);
//?---------------------------------------------
// var a = "42";
// var b = 42;

// a == b;			// true
// a === b;		// false

//* Strict comparison (e.g., ===) checks for value equality without allowing coercion
//* Abstract comparison (e.g. ==) checks for value equality with coercion allowed.

//* Explain Null and Undefined in JavaScript?
//? Something hasn't been initialized : undefined.
//? Something is currently unavailable: null.

//? In JavaScript conversion between different two build-in types called coercion.
//? Coercion comes in two forms in JavaScript: explicit and implicit.

//*--------here's an example of implicit coercion:------------
// var a = "42";
// var b = a*1;

// console.log("a= 42----->",typeof(a));
// console.log("b= 42----->",typeof(b));

//*---------------Here's an example of explicit coercion:---------
// var a = "42";
// var b = Number( a );
// a;				// "42"
// b;				// 42 -- the number!

//* Explain the type conversion in JS?
//* converting from one data type to another
//* Implicit Conversion - automatic type conversion
//* Explicit Conversion - manual type conversion.

//?---------------Summary-------------------------
// var a;
// typeof a;				// "undefined"

// a = "hello world";
// typeof a;				// "string"

// a = 42;
// typeof a;				// "number"

// a = true;
// typeof a;				// "boolean"

// a = null;
// typeof a;				// "object" -- weird, bug
//? Null: Empty memory

// a = undefined;
// typeof a;				// "undefined"
//? Undefined: A space in memory that has nothing in it _yet_
//? A variable that has not been assigned a value.

// a = { b: "c" };
// typeof a;				// "object"

//?-----------------------            ---------------------------

//TOdo---------------------------------// Todo:2 Data types------------------

//* Primitive and Non-Primitive
//? Primitive: Numbers, Strings, boolean, BigInt, symbol,null, undefined
//? Non-Primitive: Objects

//? 1.Number
// var a = 10
// a = -10
// a = Infinity
// a = -Infinity
// a = 8e-3
// a = 8e3
// a = 12.54
// a = 10_000
// a = 0xE
// a = 0b1010
// a = 0o77

// console.log(a, typeof(a))

// const number1 = 3/0;
// console.log(number1); // Infinity

// const number2 = -3/0;
// console.log(number2); // -Infinity

// strings can't be divided by numbers
// const number3 = "abc"/3;
// console.log(number3);  // NaN

//* 2.Strings

// var str = 'Hello'
// str = "hello's"
// str = `hello
// what
// is
// happening's`

// console.log(str, typeof str)

// var a = 345345678
// var b = 234567890
// var str = "hello "

//* string template literals
// var str = `hello ${a} ${b}`
// console.log(str, "----->", typeof str)

// console.log(str)

// var a = 183748
// var b = 43
// var c = 343
// var r = "The value of a, b and c is " + a + ", " + b + ", " + c
// var r = `The values of a, b and c is ${a}, ${b} and ${c}`
// console.log(r, typeof r)

//* 3.Boolean

// var bool = false
// console.log(bool, "----->", typeof bool)

// var en;
// console.log(en, "----->", typeof en)

//?*. Null
// var x = null
// console.log(x, "----->", typeof x)
//? In JS, null is a special value that represents empty or unknown value.
//? The code above suggests that the number variable is empty.
//? Note: null is not the same as NULL or Null.

//* 5. undefined

// var def;
// console.log(def, typeof def)

//* 6.BigInt

// var big = 1234567890909234567899876543n
// console.log(big, "----->", typeof big)

// BigInt value
// const value1 = 900719925124740998n;

//* Adding two big integers
// const result1 = value1 + 1n;
// console.log(result1); // "900719925124740999n"

// const value2 = 900719925124740998n;

// Error! BitInt and number cannot be added
// const result2 = value2 + 1;
// console.log(result2);

//* 7.Symbols
//? Symbol is an immutable primitive value that is unique.
// var a = 10
// var b = 10

// var a = Symbol(10)
// var b = Symbol(10)
// console.log(a, "----->", typeof a)
// console.log(a == b)

// two symbols with the same description

// const value1 = Symbol('hello');
// const value2 = Symbol('hello');

//? Though value1 and value2 both contain 'hello',
//? they are different as they are of the Symbol type.

//* 8. Objects

//? An object is a complex data type that allows us to store collections of data.
// const student = {
//     firstName: 'ram',
//     lastName: null,
//     class: 10
// };
// console.log(student)

// todo: -----------------3. JavaScript typeof-----------------
//? To find the type of a variable, you can use the typeof operator.
// const name = 'ram';
// console.log(name,'------------>',typeof(name)); // returns "string"

// const number = 4;
// console.log(number,'-------->',typeof(number)); //returns "number"

// const valueChecked = true;
// console.log(valueChecked,'--------->',typeof(valueChecked)); //returns "boolean"

// const f = null;
// console.log(x,'-------->',typeof(f)); // returns "object"

// var y = 10;
// var y = Symbol(10)
// console.log(y,'--------->',typeof y);

// var big = 99876543n
// console.log(big,'-------->', typeof big)

// var un;
// console.log(un,'-------->', typeof un)

// todo: -----------------------4. Operators-------------------
//? 1. Assignment Operators
//? 2. Arithmetic Operators
//? 3. Comparison Operators
//? 4. Logical Operators
//? 5. Bitwise Operators
//? 6. String Operators
//? 7. Other Operators

//* 1. Assignment Operator: =, +=,-=,*=,/+,%=,**=

//* ---------------------------2. Arithmetic Operators----------------------
// let x = 5;
// let y = 3;

// console.log('x=',x,'y=',y)
// addition
// console.log('x + y = ', x + y);  // 8

//? subtraction
// console.log('x - y = ', x - y);  // 2

//? multiplication
// console.log('x * y = ', x * y);  // 15

//? division
// console.log('x / y = ', x / y);  // 1.6666666666666667

//? remainder
// console.log('x % y = ', x % y);   // 2

//? increment
// console.log('++x = ', ++x); // x is now 6
// console.log('x++ = ', x++); // prints 6 and then increased to 7
// console.log('x = ', x);     // 7

//? decrement
// console.log('--x = ', --x); // x is now 6
// console.log('x-- = ', x--); // prints 6 and then decreased to 5
// console.log('x = ', x);     // 5

//exponentiation
// console.log('x ** y =', x ** y);
//? Example 1: Equal to Operator
// const a = 5, b = 2, c = 'hello';

// console.log(a == 5);     // true
// console.log(b == '2');   // true
// console.log(c == 'Hello');  // false
//? Example 2: Not Equal to Operator

// const a = 3, b = 'hello';

// not equal operator
// console.log(a != 3); // true
// console.log(b != 'Hello'); // true
//? Example 3: Strict Equal to Operator

// const a = 2;
// strict equal operator
// console.log(a === 2); // true
// console.log(a === '2'); // false
//? Note: The difference between == and === is that:
//? == evaluates to true if the operands are equal,
//? however, === evaluates to true only if the  operands are equal and
//? of the same type

//? Example 4: Strict Not Equal to Operator
// const a = 2, b = 'hello';

// strict not equal operator
// console.log(a !== 2); // false
// console.log(a !== '2'); // true
// console.log(b !== 'Hello'); // true
//? !== evaluates to true if the operands are strictly not equal.
//? It's the complete opposite of strictly equal ===. In the above example,
//? 2 !== '2' gives true. It's because their types are different even
//? though they have the same value.

//? Example 5: Greater than Operator
//? Example 6: Greater than or Equal to Operator
//? Example 7: Less than Operator
//? Example 8: Less than or Equal to Operator

//? Example 9: Logical AND Operator
// const a = true, b = false;
// const c = 4;
// console.log(a && a); // true
// console.log(a && b);  // false
// console.log((c > 2) && (c < 2)); // false

//? Example 10: Logical OR Operator
// const a = true, b = false, c = 4;
// console.log(a || b); // true
// console.log(b || b); // false
// console.log((c>2) || (c<2)); // true

//? Example 11: Logical NOT Operator
// const a = true, b = false;
// console.log(!a); // false
// console.log(!b); // true


// Define the values of a and b
// let ar = 5; // binary 0101
// let br = 3; // binary 0011

// Perform a bitwise AND operation
// let rr = ar & br; // binary 0001 (decimal 1)

// console.log(rr); // Output: 1


//* 3.Comparison Operators: ==,===,!=,!==,>,<,>=,<=

// equal operator
// console.log(2 == 2); // true
// console.log(2 == '2'); // true

// not equal operator
// console.log(3 != 2); // true
// console.log('hello' != 'Hello'); // true

// strict equal operator
// console.log(2 === 2); // true
// console.log(2 === '2'); // false

// strict not equal operator
// console.log(2 !== '2'); // true
// console.log(2 !== 2); // false

//* 4. Logical Operators: &&,||,!

// logical AND
// console.log(true && true); // true
// console.log(true && false); // false

// logical OR
// console.log(true || false); // true

// logical NOT
// console.log(!true); // false

//? Define the value of a
// let a = 10; // binary 1010

//? Use the left shift operator to shift a to the left by 3 bits
// console.log(a << 3); // Output: 80 (binary 1010000)

//? Use the zero-fill right shift operator to shift a to the right by 5 bits
//? console.log(a >>> 5); // Output: 0 (binary 0)


//?In this example, we define a variable a with the value 10, which is 1010 in
//? binary. We then use the left shift operator << to shift a to the left by 3 bits,
//? which produces 1010000 in binary (decimal value of 80). We log the result
//?  to the console using console.log(a << 3), which outputs 80.

//? Next, we use the zero-fill right shift operator >>> to shift a to the right by 5
//? bits, which produces 0 in binary. We log the result to the console using
//? console.log(a >>> 5), which outputs 0.


//todo:---------------- Type Conversions---------------------------
//? type conversion is the process of converting data of one type to another.
//? There are two types of type conversion in JavaScript.

//? 1. Implicit Conversion - automatic type conversion
//? 2. Explicit Conversion - manual type conversion

//? --------1. Implicit Conversion:-----------------
//? Example 1: Implicit Conversion to String
// numeric string used with + gives string type
// let result;

// result = '3' + 2;
// console.log(result) // "32"

// result = '3' + true;
// console.log(result); // "3true"

// result = '3' + undefined;
// console.log(result); // "3undefined"

// result = '3' + null;
// console.log(result); // "3null"
//? Example 2: Implicit Conversion to Number.
// numeric string used with - , / , * results number type

// let result;

// result = '4' - '2';
// console.log(result); // 2

// result = '4' - 2;
// console.log(result); // 2

// result = '4' * 2;
// console.log(result); // 8

// result = '4' / 2;
// console.log(result); // 2
//? Example 3: Non-numeric String Results to NaN
//? Example 4: Implicit Boolean Conversion to Number
//? Example 5: null Conversion to Number
//? Example 6: undefined used with number, boolean or null

//? --------2. Explicit Conversion--------------------
//? 1. Convert to Number Explicitly
//? 2. Convert to String Explicitly
//? 3. Convert to Boolean Explicitly

// todo: ---------------Control Statements-----------------------
//? if else statements
//? Nested if else statements
//? USing ternary operators for if else statements
//? for loop: used when you know the exact iterations
//? while loop: used when you dont know the exact number of itreations
//? break statemet
//? continue statement
//? switch statement


// for (i=1;i<=10;i++){
//     if(i==4){
//         continue;
//     }

//     console.log(i);
// }

//? The break statement terminates the loop entirely. However,
//? the continue statement only skips the current iteration.

//* -------------------switch statement---------------

// const number1= parseInt(prompt(`Enter the first number`))
// const number2=parseInt(prompt(`Enter the second number`))

// const operator = prompt(`Enter any operator(+,-,/,*)`)

// switch(operator){
//     case `+`:
//         result = number1 + number2;
//         console.log(`${number1}+${number2} = ${result}`);
//         break;
//     case `-`:
//         result = number1 - number2;
//         console.log(`${number1}-${number2} = ${result}`)
//         break;
//     case`*`:
//         result = number1 * number2;
//         console.log(`${number1}*${number2} = ${result}`)
//         break;
//     case `/`:
//         result = number1 / number2;
//         console.log(`${number1}/${number2} = ${result}`)
//         break;
//     default:
//         console.log(`Invalid Operator`)
//         break;

// }

// let fruit = prompt(`Enter a fruit name`);

// switch(fruit){
//     case `apple`:
//     case `pinaple`:
//     case `mango`:
//         console.log(`${fruit} is a fruit`)
//         break;
//     default:
//     console.log(`${fruit} is not a fruit`)

// }

//todo:-----------------Functions------------------------------

// function random() {
//     var a = "2398";
//     var b = "sfdsf";
//     var c = "wer";

//     console.log(a, b, c)
// }

// declaration of function
// function func_name (agrs) {
//     statments
// }

// Invoking (Calling) of function
// func_name(agrs)


//? program to print a text

// function greet(){
//     console.log(`Hello`)
// }

// greet();

//? var: var is function-scoped, which means that the variable is accessible
//? within the entire function,even if it is declared inside a block statement.

// var ax = `hello`;
// console.log(ax)

// function sayhello(){
//      ax = 40;
//      return ax;
// }
// result = sayhello(ax)
// console.log(result);

//? let:let is block-scoped, which means that the variable is only
//? accessible within the block statement where it is declared, as well as
//? any nested blocks.

// let bx = `morning`;
// console.log(bx)

// function saymor(){
//     let bx = 45;
//     return bx;

// }
// result = saymor()
// console.log(result)

//? const:is also block-scoped, and it creates a variable that cannot be
//? reassigned a new value once it has been initialized.

// const cx = `evening`;
// console.log(cx);

// function sayeve(){
//     const cx = 50
//     return cx;
// }

// result2 = sayeve()
// console.log(result2)


//? let and const: These two keywords provide Block Scope in JavaScript.
//? Variables declared inside a { } block cannot be accessed from outside the block:


// function example() {
//     var x = 1;
//     let y = 2;
//     const z = 3;

//     if (true) {
//       var x = 4;
//       let y = 5;
//       const z = 6;
//       console.log(x, y, z); // Output: 4 5 6
//     }

//     console.log(x, y, z); // Output: 4 2 3

//     x = 7;
//     y = 8;
    // z = 9; // Throws a TypeError because z is a constant

//     console.log(x, y, z); // Output: 7 8 3
//   }

//   example();


//   var y = 5;
// if (true) {
//   var y = 10;
//   console.log(y); // Output: 10
// }
// console.log(y); // Output: 10

//* https://www.tutorialrepublic.com/faq.php#javascript-jquery
//* https://www.tutorialrepublic.com/javascript-examples.php

//* types of function

// ?1. Named Function.
// ?2. Anonymous function.
// ?3. Arrow function.
// ?4. Immediately invoked function expression/self invoking function
// ?5. Method function.
// ?6. Function expression


//? ---------------1. Named Function--------------------

// function myfunc(){
//     console.log("Hello JS")
// }

// myfunc()

//* Another way

// function myfun(){
//     return(`This is it`)
// }
// console.log(myfun())

//* Another way

// function funme(){
//     let x = (`Another way`)
//     return x
// }

// result = funme();

// console.log(result)

//? ------------------------2. Anonymous function-------------------

//* Example-1

// (function (a,b){
//     console.log(a+b)
// })

// (4,5)

//? -------------3. Arrow function--------------------


// const name = () => {
//     console.log(`Hello how are you`)

// };

// name();


//? -------------------4.function expression----------------------

//* function expression with anonymous function

// const x  = function() {
//     console.log(`Im function exp with anonymous function-func without name`)
// }

// x()

// const ad = function random(){
//     console.log(`hi func expression`)
// }

// ad()

//? 5.Immediatley invoked function expression

// Define an anonymous arrow function enclosed in parentheses
// Immediately invoke the function with another set of parentheses

// (() => {
//     console.log("Hello IIVF");
//   })

// ()

//?6. Method function

// var objectName = {
//     functionName: function(parameters) {
       // function code
//     }
//   };

// const person = {
//     name: 'John',
//     age: 30,
//     sayHello: function() {
//       console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     }
//   };

//   person.sayHello(); //? Output: Hello, my name is John and I am 30 years old.


//? 7. function () constructor

// const myfunct = new Function(`a`,`b`,`return a*b`)

// result = myfunct(5,4)
// console.log(result)

//? use new keyword also you can avoid let keyword shown below....




//* ----------------------objects and Classes--------------
//? objects are one of the fundamental data types and are used to store
//? collections of related data and functionality.
//? An object is a container that can hold properties (variables)
//? and methods (functions).


//? Example:1-Car object: creating properties(variables) and methods(functions)

let car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2021,
    color: 'blue',
    start: function() {
      console.log('Starting the car...');
    },
    stop: function() {
      console.log('Stopping the car...');
    },
    accelerate: function() {
      console.log('Accelerating the car...');
    }
  };

//? Example:2 Name object.
const person = {firstName:"Ravi",
lastName:"Kumar",
age:36,
eyeColor:"black",
};
function name(){
    console.log(``)
}
// console.log(`I'm ${person.age} years old`)


//? Example:3 pen object = Another way of creating objects
let pen = {
    model:`Hero`,
    type:`Ink`,
    color:`Black`,
    write:function(){
        console.log(`This pen is ${this.color} in color`)
    }
}
// console.log(pen.model)
// pen.write()

//? Example:4
let school={}
school.room=`rooms`;
school.num=`50`;
school.fr=`friends`;

// console.log(`there are ${school.num} rooms and I play with my ${school.fr}`)





//* ----------------------class-----------------------------------------



//* ----------------var, let, const and Hoisting--------------------------------

//? ---------------var => function scoped-----------------


//? --------------let, const  => block scoped----------------------


//* Oops
//? 1. Encapsulation(getters and setters)
//? 2. Inheritance.
//? 3. Abstraction.
//? 4. Polymorphism.

//* Error handling

//* Higher order functions

//* DOM-Manipulation
//* Asynchronous programming
//*


// for(x=0;x<=10;x++){
//   const i=10;
//   // console.log(x)
// }

// console.log(i);

// var c=20;
// function add(a,b){
//   var c=10;
//   console.log(a+b)
// }

// add(5,7)
// console.log(c)


/*--------------*/
// var x = null
// console.log(x)

function awesomeFunction(){
  var a = 2;

  var multiplyBy2 = function(){
    console.log(a*2); // Can access variable "a" since a and multiplyBy2 both are written inside the same function
  }
  multiplyBy2()
}
// console.log(a); // Throws reference error since a is written in local scope and cannot be accessed outside

// multiplyBy2(); // Throws reference error since multiplyBy2 is written in local scope

// awesomeFunction()


{
  var x = 45;
}

// console.log(x); // Gives reference error since x cannot be accessed outside of the block

for(let i=0; i<2; i++){
  // do something
  // console.log(i)
}

// console.log(i); // Gives reference error since i cannot be accessed outside of the for loop block


var y = 24;

function favFunction(){
  var x = 667;
  var anotherFavFunction = function(){
    console.log(x); // Does not find x inside anotherFavFunction, so looks for variable inside favFunction, outputs 667
  }

  var yetAnotherFavFunction = function(){
    console.log(y); // Does not find y inside yetAnotherFavFunction, so looks for variable inside favFunction and does not find it, so looks for variable in global scope, finds it and outputs 24
  }

  anotherFavFunction();
  yetAnotherFavFunction();
}
// favFunction();


function randomFunc(){
  var obj1 = {name:"Vivian", age:45};

  return function(){
    console.log(obj1.name + " is "+ "awesome"); // Has access to obj1 even when the randomFunc function is executed

  }
}

var initialiseClosure = randomFunc(); // Returns a function

// initialiseClosure();


// function Person(name,age,gender){
//   this.name = name;
//   this.age = age;
//   this.gender = gender;
// }


// var person1 = new Person("Vivek", 76, "male");
// console.log(person1);


// var obj1 = {
//   valueOfThis: function(){
//     return this;
//   }
// }

// console.log(obj1)

// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const data = { name: "John", age: 30 };
//       reject("Error occurred while fetching data"); // Simulating an error
//     }, 2000);
//   });
// }

// fetchData()
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));



  function modifyObject(obj) {
    obj.foo = 'bar';  // modifies the original object
    obj = { prop: 'value' };  // assigns a new object to the parameter
  }

  const myObj = { foo: 'baz' };
    modifyObject(myObj);
  console.log(myObj);  // { foo: 'bar' }


function fib (n){
  if( n<=1){
    return n;
  }
  else{
    return fib(n-1) + fib(n-2);


  }
}

console.log(fib(14))




// Fa = 0 and Fb = 1.

// Given a number n, print n-th Fibonacci Number.

// fn = Fa-1 + Fb-2

