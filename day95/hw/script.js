// codewars 1 


// function makeNegative(num) {
//   return num > 0 ? -num : num
// }


//========================================================================================================================

//codewars 2 

// const stringToNumber = function(str){
//   return Number(str)
// }



//========================================================================================================================



//codewars 3 

// function greet(name){
//   return `Hello, ${name} how are you doing today?`
// }

//========================================================================================================================


//codewars 4


// function makeUpperCase(str) {
//   return str.toUpperCase()
// }

//========================================================================================================================


//codewars 5


// const rps = (p1, p2) => {
//   if (p1 === p2){
//     return "Draw!"
//   }else if (p1 === "rock" && p2 === "scissors" || p1 === "paper" && p2 ==="rock" || p1 === "scissors" && p2 === "paper"){
//     return "Player 1 won!"
//   }else{
//     return "Player 2 won!"
//   }
// };

//========================================================================================================================


// codewars 6

// function testEven(n) {
//     if (n % 2 === 0){
//       return true
//     }else{
//       return false
//     }
// }


//========================================================================================================================


// 7)მოცემულია კოდი:

// let name = "Goga"; ==> global scope

// function first() {
//     let age = 20; ==> local scope

//     function second() {
//         let city = "Tbilisi"; ==> local scope

//         console.log(name);
//         console.log(age);
//         console.log(city);
//     }

//     second();
// }

// first();

// დავალება:

// მიუთითე თითოეული ცვლადის Scope. 

// რომელი ცვლადის გამოყენება შეუძლია second() ფუნქციას? ==> samive cvladis
// რომელი ცვლადის გამოყენება არ შეუძლია first() ფუნქციას? ==> city - cvladis
// შეცვალე კოდი ისე, რომ city დაბეჭდო first() ფუნქციიდანაც. 


//=========================================================================================




// 8)იპოვე შეცდომა Scope-ში
// let score = 100;

// if (score > 50) {
//     let message = "Passed";
// }

// console.log(message);

// დავალება:
// ახსენი, რატომ იძლევა ეს კოდი შეცდომას და შეცვალე ისე, რომ "Passed" დაიბეჭდოს.


// imitom rom message aris local cvladi da mxolod tavis funqciashi moqmedebs.




//============================================================================================================




// 9)let x = 10;

// function outer() {
//     let x = 20;

//     function middle() {
//         let y = 30;

//         function inner() {
//             let x = 40;

//             console.log(x);
//             console.log(y);
//         }

//         inner();
//     }

//     middle();
// }

// outer();

// დავალება:

// რა დაიბეჭდება?
// inner()-ში რომელი x გამოიყენება?
// თუ inner()-დან let x = 40 წავშლით, რომელი x იქნება გამოყენებული?
// თუ middle()-დანაც წავშლით let y = 30-ს, რა მოხდება console.log(y)-ზე?


//============================================================================================



// 10)let country = "Georgia";

// function school() {
//     let students = 20;

//     if (students > 10) {
//         let teacher = "Goga";

//         console.log(country); => global scope
//         console.log(students); => block scope
//         console.log(teacher);=> block scope
//     }
// }

// დავალება: თითოეულ console.log()-თან მიუწერე:

// country → ______ scope
// students → ______ scope
// teacher → ______ scope


// 11)კომენტარის სახით ახსსენი თუ რა არის scope როგორი სკოუპებია რსებობს და ყველა მნშვნელოვანი ინფორმაცია რაც ვისწავლეთ


// scope განსაზღვრავს იმას თუ კოდის რომელ ნაწილში შეგვიძლია კონკრეტული ცვლადის გამოყენება. არსებობს global da block scopebi.global scope ხელმისაწვდომია კოდის ყველა ნაწილში, ხოლო block scope მხოლოდ იმ ფუნქციაში რომელშიც ის ცვლადის სახითაა შექმნილი