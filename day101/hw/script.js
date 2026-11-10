// 1)შექმენი ფუნქცია sayHello, რომელიც აბრუნებს:

// "Hello, student!"

// შემდეგ ეს ფუნქცია შეინახე ცვლადში greeting.

// გამოიძახე greeting() და დაბეჭდე შედეგი.

// function sayHello(){
//     return "Hello, student!"
// }

// let greeting = sayHello

// console.log(greeting)


//=====================================================================================================================


// 2)შექმენი:

// function add(a, b) {
//     return a + b;
// }

// შემდეგ:

// შექმენი calculate ცვლადი
// calculate-ს მიანიჭე add
// გამოიძახე calculate


// function add(a, b) {
//     return a + b
// }

// let calculate = add

// console.log(calculate(5,4))




//=====================================================================================================================




// 3)შექმენი ორი ფუნქცია:

// multiply(a, b)
// subtract(a, b)

// პირველმა უნდა დააბრუნოს ორი რიცხვის ნამრავლი, მეორემ — სხვაობა.

// შემდეგ:

// let operation = multiply;

// გამოიყენე operation 5 და 4-ზე.

// შემდეგ შეცვალე:

// operation = subtract;

// და ისევ გამოიყენე 5 და 4-ზე.


// function multiply(a, b) {
//     return a * b
// }


// function subtract(a, b) {
//     return a - b
// }


// let operation = multiply

// console.log(operation(5,4))

// operation = subtract

// console.log(operation(5,4))


//=====================================================================================================================


// 4)შექმენი სამი ფუნქცია:

// add(a, b)
// subtract(a, b)
// multiply(a, b)

// შემდეგ შექმენი ცვლადი:

// let operation;

// მას თავდაპირველად მიანიჭე add.

// გამოიძახე operation(20, 5).

// შემდეგ operation გადააკეთე multiply ფუნქციად და იგივე რიცხვებზე ისევ გამოიძახე.

// ბოლოს operation გადააკეთე subtract ფუნქციად.

// შედეგები უნდა იყოს:

// 25
// 100
// 15



// function add(a, b) {
//     return a + b
// }

// function subtract(a, b) {
//     return a - b
// }

// function multiply(a, b) {
//     return a * b
// }

// let operation = add

// console.log(operation(20, 5))

// let operation = multiply

// console.log(operation(20, 5))

// operation = subtract

// console.log(operation(20, 5))



//=====================================================================================================================



// 6)double(number)
// square(number)
// negative(number)

// რომლებიც შესაბამისად:

// გააორმაგებს რიცხვს
// აიყვანს კვადრატში
// გახდის უარყოფითს

// შემდეგ შექმენი:

// function processNumber(number, operation) {
    
// }

// operation უნდა იყოს ფუნქცია.

// მაგალითად:

// processNumber(5, double)
// processNumber(5, square)
// processNumber(5, negative)

// მოსალოდნელი შედეგები:

// 10
// 25
// -5


// function double(number) {
//     return number * 
// }

// function square(number) {
//     return number * number
// }

// function negative(number) {
//     return -number
// }

// function processNumber(number, operation) {
//     return operation(number)
// }

// console.log(processNumber(5, double))
// console.log(processNumber(5, square))
// console.log(processNumber(5, negative))


//=====================================================================================================================


// 7)შექმენი სამი ფუნქცია:

// passed(score)
// failed(score)

// passed უნდა დააბრუნოს:

// "Student passed"

// ხოლო failed:

// "Student failed"

// შემდეგ შექმენი:

// function showResult(score, resultFunction) {

// }

// resultFunction უნდა იყოს ფუნქცია, რომელსაც შენ გადასცემ.

// გამოიყენე:

// showResult(90, passed)
// showResult(40, failed)




// function passed(score) {
//     return "Student passed"
// }

// function failed(score) {
//     return "Student failed"
// }

// function showResult(score, resultFunction) {
//     return resultFunction(score)
// }

// console.log(showResult(90, passed))
// console.log(showResult(40, failed))


//=====================================================================================================================


