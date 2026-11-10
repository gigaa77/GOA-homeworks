




















































//====================================================
// 8




let list = [10, "ვაშლი", true, 25, "მსხალი", false, 50];

let stringList = list.filter(item => typeof item === "string");
let numberList = list.filter(item => typeof item === "number");
let booleanList = list.filter(item => typeof item === "boolean");

console.log(stringList);
console.log(numberList);
console.log(booleanList);