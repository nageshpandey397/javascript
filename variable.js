
const accountId=12312;
// console.log(typeof(accountId))
let accountEmail="nagesh@google.com"
var accountPassword="456456"
 accountCity="mumbai";
let accountState;
// accountId=22224 //not allowed
// console.log(accountId);
 accountEmail="yogesh@google.com"
 accountPassword="45203"
 accountCity="pune";
// console.table([accountEmail,accountPassword,accountCity,accountState])
/*

*/
// console.table(typeof(accountEmail))
// console.table(typeof([accountEmail]))


var a=45;
console.log(a); //45
var a=88;
console.log(a);//88
// var: variable can be re-declared or updated we can do.A global scope.

let b=88;
console.log(b);  //88
// let b=78; error will be Identifier 'b' has already been declared
// let : variable cannot be re-declared but can be updated . A block scope variable

const pi=3.14;
console.log(pi);


// console.log(pi); -It is fixed we cannot change  - error Assignment to constant variable.
//const : variable cannot be re-declared and or not updated . A block scope variable.

{
    let ai=88;
    console.log(a);
}
let ai=99;console.log(ai);
{
    let ai=1000;
    console.log(ai);
}