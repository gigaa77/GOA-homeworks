
// 1)შექმენი function expression სახელად checkNumber, რომელსაც გადაეცემა რიცხვი.

// ფუნქციამ უნდა დააბრუნოს:

// "Positive Even" — დადებითი და ლუწი
// "Positive Odd" — დადებითი და კენტი
// "Negative Even" — უარყოფითი და ლუწი
// "Negative Odd" — უარყოფითი და კენტი
// "Zero" — თუ რიცხვი 0-ია , use ternary



// let checkNumber = function(num = 19){
//     return num === 0 ? "Zero" : num > 0 && num % 2 === 0 ? "Positive Even" : num > 0 && num % 2 !== 0 ? "Positive Odd" : num < 0 && num % 2 === 0 ? "Negative Even" : "Negative Odd"
// }

// console.log(checkNumber(-9))


//===================================================================================================



// 2)შექმენით arrow ფუნქცია რომელსაც გადაეცემა ერთ პარამეტრი name ფუნქციამ უნდა შეამოწმოს if else ით იწყება თუ არა ეს სახელი "გ" ასოზე , თუ იწყება დააბრუნე good name სხვა შემთხვევაში დააბრუნე "still good name"

// 3)შექმენით arrow ფუნქცია რომელსაც გადაეცემა ერთ პარამეტრი num , შენი დავალებაა შეამოწმო ეს რიცხვი ლუწია თუ კენტია , use ternary and single line block stytax


let nameCheck = (name) => {
    if (name.startsWith("g")) {
        return "good name"
    }else{
        return "still good name"
    }
}


console.log(nameCheck("giga"))


let numCheck = (num) => num % 2 === 0 ? "even" : "odd"

console.log(numCheck(6))