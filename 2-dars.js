// let x=10;
// let y=20;
// function add(a, b){
//     return a+b;
// }
// let result=add(x,y);
// console.log(result)
// let a = 20, 
//     b = 30;
let a=20;
let b=30;
function divide(a, b) {
    if(b == 0) {
       throw 'Division by zero';
    }
    return b / a;
}
console.log(divide(a, b))