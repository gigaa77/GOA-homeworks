// let student = {
//     name: "Giorgi",
//     math: 85,
//     english: 92,
//     physics: 74,
//     chemistry: 88,
//     history: 60
// };

// მოთხოვნები:
// 1. for...in-ის გამოყენებით დაბეჭდე ყველა გასაღები და შესაბამისი მნიშვნელობა.
// 2. დაითვალე, რამდენ საგანში მიიღო მოსწავლემ 80 ან მეტი ქულა.
// 3. იპოვე ყველა საგნის ქულების ჯამი.
// 4. იპოვე ყველაზე დაბალი ქულა და დაბეჭდე მისი შესაბამისი საგნის სახელი.
// 5. დაითვალე, რამდენ საგანში მიიღო მოსწავლემ 70-ზე ნაკლები ქულა.


// // 1
// for (i in student) {
//     console.log(i, " : ", student[i])
// }

// // 2
// let count = 0

// for (i in student) {
//     if (student[i] >= 80) {
//         count++
//     }
// }

// console.log(count)

// // 3
// let sum = 0

// for (i in student) {
//     if (i != "name") {
//         sum += student[i]
//     }
// }

// console.log(sum)

// // 4
// let min = 100
// let subject = ""

// for (i in student) {
//     if (i != "name" && student[i] < min) {
//         min = student[i]
//         subject = i
//     }
// }

// console.log(subject, min)

// // 5
// let count2 = 0

// for (i in student) {
//     if (i != "name" && student[i] < 70) {
//         count2++
//     }
// }

// console.log(count2)

//==========================================================================================================================


// 2)let products = {
//     laptop: 2500,
//     phone: 1800,
//     headphones: 250,
//     keyboard: 150,
//     monitor: 900,
//     mouse: 80
// };

// მოთხოვნები:
// 1. დაბეჭდე ყველა პროდუქტის სახელი და ფასი.
// 2. დაითვალე, რამდენი პროდუქტი ღირს 500 ლარზე მეტი.
// 3. იპოვე ყველა პროდუქტის საერთო ღირებულება.
// 4. იპოვე ყველაზე ძვირადღირებული პროდუქტი და მისი ფასი.
// 5. შექმენი ახალი ცარიელი ობიექტი expensiveProducts და for...in-ის გამოყენებით დაამატე მასში მხოლოდ ის პროდუქტები, რომელთა ფასიც 500 ლარზე მეტია.

// let products = {
//     laptop: 2500,
//     phone: 1800,
//     headphones: 250,
//     keyboard: 150,
//     monitor: 900,
//     mouse: 80
// };

// 1
// for (i in products) {
//     console.log(i, " : ", products[i])
// }

// // 2
// let count = 0

// for (i in products) {
//     if (products[i] > 500) {
//         count++
//     }
// }

// console.log(count)

// // 3
// let sum = 0

// for (i in products) {
//     sum += products[i]
// }

// console.log(sum)

// // 4
// let max = 0
// let productName = ""

// for (i in products) {
//     if (products[i] > max) {
//         max = products[i]
//         productName = i
//     }
// }

// console.log(productName, max)

// // 5
// let expensiveProducts = {}

// for (i in products) {
//     if (products[i] > 500) {
//         expensiveProducts[i] = products[i]
//     }
// }

// console.log(expensiveProducts)

// 3)let user = {
//     username: "Goga123",
//     age: 19,
//     city: "Tbilisi",
//     score: 450,
//     active: true,
//     gamesPlayed: 35
// };

// მოთხოვნები:
// 1. დაბეჭდე ყველა გასაღები და მნიშვნელობა.
// 2. დაითვალე, რამდენი მნიშვნელობაა ტიპით number.
// 3. დაითვალე, რამდენი გასაღების სახელი შეიცავს 5-ზე მეტ სიმბოლოს.
// 4. შექმენი ახალი ობიექტი numericInfo, რომელშიც მხოლოდ რიცხვითი მნიშვნელობები მოხვდება.
// 5. იპოვე ყველა რიცხვითი მნიშვნელობის ჯამი.

// 4)let exam = {
//     Nika: 95,
//     Ana: 68,
//     Giorgi: 82,
//     Mariam: 45,
//     Luka: 73,
//     Saba: 30,
//     Elene: 88
// };

// მოთხოვნები:
// 1. for...in-ის გამოყენებით დაბეჭდე თითოეული მოსწავლის სახელი და ქულა.
// 2. თუ მოსწავლის ქულა 70 ან მეტია, დაბეჭდე "ჩააბარა", სხვა შემთხვევაში — "ვერ ჩააბარა".
// 3. დაითვალე ჩაბარებული და ვერჩაბარებული მოსწავლეების რაოდენობა.
// 4. იპოვე ყველაზე მაღალი ქულა და იმ მოსწავლის სახელი, რომელმაც ეს ქულა მიიღო.
// 5. გამოთვალე ყველა მოსწავლის ქულების საშუალო არითმეტიკული.


// // 1
// for (i in exam) {
//     console.log(i, " : ", exam[i])
// }

// // 2
// for (i in exam) {
//     if (exam[i] >= 70) {
//         console.log(i, "ჩააბარა")
//     } else {
//         console.log(i, "ვერ ჩააბარა")
//     }
// }

// // 3
// let passed = 0
// let failed = 0

// for (i in exam) {
//     if (exam[i] >= 70) {
//         passed++
//     } else {
//         failed++
//     }
// }

// console.log("ჩააბარა:", passed)
// console.log("ვერ ჩააბარა:", failed)

// // 4
// let max = 0
// let studentName = ""

// for (i in exam) {
//     if (exam[i] > max) {
//         max = exam[i]
//         studentName = i
//     }
// }

// console.log(studentName, max)

// // 5
// let sum = 0
// let count = 0

// for (i in exam) {
//     sum += exam[i]
//     count++
// }

// console.log(sum / count)

//===========================================================================================================


// მოთხოვნები:
// 1. Object.keys()-ის გამოყენებით მიიღე ყველა საგნის სახელი და შეინახე ცალკე მასივში.
// 2. Object.values()-ის გამოყენებით მიიღე ყველა ქულა და შეინახე სხვა მასივში.
// 3. დაბეჭდე საგნების რაოდენობა.
// 4. დაითვალე, რამდენ საგანში მიიღო მოსწავლემ 80 ან მეტი ქულა.
// 5. გამოთვალე ყველა ქულის ჯამი.
// 6. იპოვე ყველაზე მაღალი ქულა და დაბეჭდე შესაბამისი საგნის სახელიც.


let student = {
    math: 85,
    english: 92,
    physics: 67,
    chemistry: 78,
    history: 55,
    biology: 90
}

// 1
let subjects = Object.keys(student)

console.log(subjects)

// 2
let scores = Object.values(student)

console.log(scores)

// 3
console.log(subjects.length)

// 4
let count = 0
// 5
let sum = 0
let max = 0
let subjectName = ""
for (i in student) {
    if (student[i] >= 80) {
        count++
    }

    sum += student[i]
    if (student[i] > max) {
        max = student[i]
        subjectName = i
    }
    
}

console.log(count)
console.log(sum)
console.log(subjectName, max)

































