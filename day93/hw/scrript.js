// 1)შექმენი ფუნქცია calculatePrice(price, quantity).

// price — პროდუქტის ფასი
// quantity — რაოდენობა
// ფუნქციამ უნდა დააბრუნოს საბოლოო ფასი.
// თუ quantity არ გადაეცა, default მნიშვნელობა იყოს 1.
// ფუნქცია გამოიძახე მინიმუმ 3 სხვადასხვა არგუმენტით.


// function calculatePrice(price, quantity = 1){
//     console.log(price * quantity)
// }


// calculatePrice(5, 6)
// calculatePrice(4, 2)
// calculatePrice(2)


//========================================================================


// 2)შექმენი ფუნქცია getResult(name, score).

// ფუნქციამ უნდა დააბრუნოს:

// თუ ქულა 90 ან მეტია → "name: Excellent"
// თუ 70–89 → "name: Good"
// თუ 50–69 → "name: Passed"
// თუ 50-ზე ნაკლებია → "name: Failed"

// score თუ არ გადაეცა, default მნიშვნელობა იყოს 0.

// გამოიძახეთ ფუნქცია სხვადასხვა არგუმენტებით 


// function getResult(name, score = 0){
//     switch (true){
//         case score >=90:
//             console.log(""+name +": Excellent")
//             break
//         case score >70 && score < 89:
//             console.log(""+name +": Good")
//             break
//         case score >50 && score < 69:
//             console.log(""+name +": Passed")
//             break
//         case score < 50:
//             console.log(""+name +": Failed")
//             break
//         default:
//             console.log("Error")
//             break
//     }
// }


// getResult("Giga", 45)
// getResult("Giga", 67)
// getResult("Giga", 12)
// getResult("Giga", 101)
// getResult("Giga", 75)


//==========================================================================


// 3)შექმენი ფუნქცია:

// calculateShipping(price, shipping = 10)

// წესი:

// თუ პროდუქტის ფასი 100 ან მეტია → მიწოდება უფასოა.
// სხვა შემთხვევაში დაემატოს shipping.
// ფუნქციამ უნდა დააბრუნოს საბოლოო თანხა.

// გამოიძახე სხვადასხვა სიტუაციაში, მათ შორის საკუთარი shipping მნიშვნელობის გადაცემით.




// function calculateShipping(price, shipping = 10){
//     price >= 100 ? console.log(`Final price with free shipping: ${price}`) : console.log(`final price : ${price + shipping}`)
// }

// calculateShipping(100)




// ===================================================================================================================================



// 4)შექმენი ფუნქცია:

// checkAge(name, age = 18)

// ფუნქციამ უნდა დააბრუნოს:

// 18 ან მეტი → "name is adult"
// 18-ზე ნაკლები → "name is minor"

// შემდეგ გამოიძახე ფუნქცია მინიმუმ 4-ჯერ.


// function checkAge(name, age = 18){
//     age >= 18 ? console.log(`${name} is adult`) : age < 18 && age > 0 ? console.log(`${name} is minor`) : console.log("Error")
// }


// checkAge("Giga", 16)
// checkAge("Giga",0)

// checkAge("Giga", 46)


//=======================================================================================================================================


// 5)შექმენი ფუნქცია:

// addPoints(score, points = 10)

// ფუნქციამ უნდა:

// მიიღოს არსებული ქულა.
// დაამატოს points.
// დააბრუნოს ახალი ქულა.


// function addPoints(score, points = 10){
//     let newScore = 0

//     newScore = score + points

//     console.log(newScore)
// }

// addPoints(29, 50)


//==============================================================================================================



// 6)შექმენი ფუნქცია:

// createMessage(name, message = "Hello")

// ფუნქციამ უნდა დააბრუნოს:

// Hello, Goga!

// ან თუ სხვა message გადაეცა:

// Welcome, Goga!

// function createMessage(name, message = "Hello"){
//     console.log(`${message},  ${name}!`)
// }

// createMessage('Goga')
// createMessage('Goga', 'Welcome')


//=====================================================================================


// 7)შექმენი ფუნქცია:

// calculateDiscount(price, discount = 10)

// ფუნქციამ უნდა გამოითვალოს ფასდაკლების შემდეგ დარჩენილი თანხა.

// function calculateDiscount(price, discount = 10) {
//     let newPrice = price - (price * discount / 100)
//     return newPrice;
// }

// console.log(calculateDiscount(100))
// console.log(calculateDiscount(200, 20))


//=============================================================================================




// 12)შექმენი ფუნქცია:

// analyzeNumber(number, limit = 100)

// ფუნქციამ უნდა დააბრუნოს:

// თუ რიცხვი უარყოფითია → "Negative"
// თუ 0-ია → "Zero"
// თუ დადებითია და limit-ზე ნაკლებია → "Small positive"
// თუ limit-ზე მეტია → "Large positive"

// შეასრულეთ ternary ით




function analyzeNumber(number, limit = 100) {
  return number < 0 ? "Negative" : number === 0 ? "Zero" : number < limit ? "Small positive" : "Large positive"
}

console.log(analyzeNumber(5, 12))