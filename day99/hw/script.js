// let prices = [120, 45, 300, 80, 150, 25, 400];

// შექმენი პროგრამა, რომელიც:

// for ციკლით გადაუვლის ყველა ფასს.

// თუ ფასი 100-ზე მეტია, ფასს  20 იანფასდაკლებას გაუკეთებს.

// თუ ფასი 50-დან 100-მდეა, ფასს 10-იან ფასდაკლებას გაუკეთებს.

// სხვა შემთხვევაში ფასს არ შეცვლის.

// განაახლებს ფასებს თავდაპირველ მასივში.

// დაითვლის ფასდაკლებული პროდუქტების საერთო ღირებულებას (ჯამს).

// უკუღმა ციკლით დაბეჭდავს საბოლოო ფასებს.


// let prices = [120, 45, 300, 80, 150, 25, 400]

// let sum = 0

// for (let i = 0; i < prices.length; i++){
//     if (prices[i] > 100){
//         prices[i] = prices[i] - prices[i] * 20/100
//         sum += prices[i]
//     }else if (prices[i] > 50 && prices[i] < 100){
//         prices[i] = prices[i] - prices[i] * 10/100
//         sum += prices[i]
//     }


// }


// for (let i = prices.length-1 ; i >=0; i--){
//     console.log(prices[i])
// }

// console.log()



//=====================================================================================




// let messages = [
//     "  Hello Goga  ",
//     "JAVASCRIPT is fun",
//     "  I LOVE CODING ",
//     "React is awesome",
//     "  Learn JavaScript  "
// ];

// let count = 0
// for (let i = 0; i < messages.length; i++) {

//     messages[i] = messages[i].trim()
//     messages[i] = messages[i].toLowerCase()

//     if (messages[i].includes("javascript")) {
//         console.log("JavaScript message found")
//         count++
//     }
// }

// console.log("Count:", count)


// for (let i = messages.length - 1; i >= 0; i--) {

//     if (messages[i].length > 15) {
//         console.log(messages[i])
//     }
// }



//=====================================================================================



// let numbers = [12, 5, 18, 7, 24, 9, 30, 11, 6, 21];

// შექმენი პროგრამა, რომელიც:

// დაბეჭდავს ყველა ლუწ რიცხვს.

// დაითვლის ყველა კენტი რიცხვის ჯამს.

// იპოვის ყველაზე დიდ რიცხვს.

// იპოვის ყველაზე პატარა რიცხვს.

// თუ რიცხვი 10-ზე მეტია და 25-ზე ნაკლებია, დაბეჭდავს "Special number".

// უკუღმა ციკლით დაბეჭდავს ყველა რიცხვს, რომელიც 3-ის ჯერადია.




// let numbers = [12, 5, 18, 7, 24, 9, 30, 11, 6, 21]

// let oddSum = 0
// let max = numbers[0]
// let min = numbers[0]

// // ლუწი რიცხვები + კენტი რიცხვების ჯამი
// for (let i = 0; i < numbers.length; i++) {

//     if (numbers[i] % 2 === 0) {
//         console.log(numbers[i])
//     }

//     if (numbers[i] % 2 !== 0) {
//         oddSum += numbers[i]
//     }

//     if (numbers[i] > max) {
//         max = numbers[i]
//     }

//     if (numbers[i] < min) {
//         min = numbers[i]
//     }

//     if (numbers[i] > 10 && numbers[i] < 25) {
//         console.log("Special number")
//     }
// }

// console.log(oddSum)
// console.log(max)
// console.log(min)


// for (let i = numbers.length - 1; i >= 0; i--) {

//     if (numbers[i] % 3 === 0) {
//         console.log(numbers[i])
//     }
// }



//=====================================================================================




// 4)let names = [
//   "  goga ",
//   "NIKA",
//   "  ana  ",
//   "Giorgi",
//   "  mariam"
// ];

// შექმენი პროგრამა, რომელიც:

// ყველა სახელს მოაშორებს ზედმეტ სივრცეებს.

// თითოეული სახელის პირველ ასოს გადაიყვანს დიდ ასოში, ხოლო დანარჩენ ასოებს — პატარა ასოებში.

// განაახლებს თავდაპირველ მასივს.

// დაითვლის, რამდენი სახელი შეიცავს ასო "a"-ს.

// უკუღმა ციკლით დაბეჭდავს სახელებს.

// თუ სახელი "goga"-ს უდრის, გამოიტანს "Hello Goga!" შეტყობინებას.







// let names = [
//     "  goga ",
//     "NIKA",
//     "  ana  ",
//     "Giorgi",
//     "  mariam"
// ]

// let count = 0

// for (let i = 0; i < names.length; i++) {

//     names[i] = names[i].trim()

//     names[i] = names[i][0].toUpperCase() + names[i].slice(1).toLowerCase()

//     if (names[i].toLowerCase().includes("a")) {
//         count++
//     }

//     if (names[i].toLowerCase() === "goga") {
//         console.log("Hello Goga!")
//     }
// }

// console.log("Count:", count)

// for (let i = names.length - 1; i >= 0; i--) {
//     console.log(names[i])
// }


//=====================================================================================


// 6)let names = ["goga", "NIKA", "ana", "Giorgi", "MARIAM", "dato"];

// let scores = [85, 42, 96, 67, 51, 73];

// შექმენი პროგრამა, რომელიც:

// ორივე მასივს ერთი და იმავე for ციკლით გადაუვლის.

// თითოეულ სახელს მოაშორებს ზედმეტ სივრცეებს და პირველ ასოს დიდად გამოიტანს.

// თითოეული მოსწავლის ქულას შეამოწმებს და შესაბამის შეფასებას მიანიჭებს:

// 90–100: "Excellent"

// 75–89: "Very Good"

// 60–74: "Good"

// 50–59: "Passed"

// 50-ზე ნაკლები: "Failed"

// დაითვლის ჩაჭრილი მოსწავლეების რაოდენობას.

// დაითვლის 80-ზე მაღალი ქულების ჯამს.

// იპოვის ყველაზე მაღალი ქულის მქონე მოსწავლის სახელსა და ქულას.

// გამოთვლის ყველა მოსწავლის საშუალო ქულას.

// უკუღმა ციკლით გამოიტანს ყველა მოსწავლის სახელსა და ქულას.



// let names = ["goga", "NIKA", "ana", "Giorgi", "MARIAM", "dato"]
// let scores = [85, 42, 96, 67, 51, 73]

// let failedCount = 0
// let highScoresSum = 0
// let highestScore = scores[0]
// let highestStudent = names[0]
// let total = 0

// for (let i = 0; i < names.length; i++) {

//     names[i] = names[i].trim()
//     names[i] = names[i][0].toUpperCase() + names[i].slice(1).toLowerCase()


//     switch (true) {
//     case scores[i] >= 90 && scores[i] <= 100:
//         console.log(names[i], "Excellent")
//         break

//     case scores[i] >= 75 && scores[i] <=89:
//         console.log(names[i], "Very Good")
//         break

//     case scores[i] >= 60 && scores[i]  <=74:
//         console.log(names[i], "Good")
//         break

//     case scores[i] >= 50 && scores[i] <=59:
//         console.log(names[i], "Passed")
//         break

//     default:
//         console.log(names[i], "Failed")
//         failedCount++
// }

//     if (scores[i] > 80) {
//         highScoresSum += scores[i]
//     }

//     if (scores[i] > highestScore) {
//         highestScore = scores[i]
//         highestStudent = names[i]
//     }

//     total += scores[i]
// }

// console.log("Failed students:", failedCount)
// console.log("80-ზე მაღალი ქულების ჯამი:", highScoresSum)
// console.log("Highest student:", highestStudent)
// console.log("Highest score:", highestScore)

// let average = total / scores.length
// console.log("Average:", average)


// for (let i = names.length - 1; i >= 0; i--) {
//     console.log(names[i], scores[i])
// }