
// 1)const scores = [45, 82, 67, 100, 34, 91, 76, 58, 100, 23, 88, 64];


// შეასრულე შემდეგი მოქმედებები:
// 1. filter() — შექმენი ახალი მასივი, რომელშიც იქნება მხოლოდ 60-ზე მეტი ან ტოლი ქულები.
// 2. map() — თითოეულ ქულას დაუმატე 5 ქულა.
// 3. filter() — ახალი მასივიდან დატოვე მხოლოდ ის ქულები, რომლებიც 80-ზე მეტია.
// 4. reduce() — გამოთვალე საბოლოო მასივში დარჩენილი ქულების ჯამი.
// 5. findIndex() — იპოვე თავდაპირველ მასივში პირველი 100-ქულიანი შედეგის ინდექსი.
// 6. some() — შეამოწმე, არის თუ არა თავდაპირველ მასივში 30-ზე ნაკლები ქულა.
// 7. every() — შეამოწმე, არის თუ არა ყველა ქულა 20-ზე მეტი.
// 8. forEach() — დაბეჭდე თითოეული საბოლოო ქულა ცალკე ხაზზე.







// const scores = [45, 82, 67, 100, 34, 91, 76, 58, 100, 23, 88, 64]

// const filteredScores = scores.filter(score => score >= 60)
// console.log(filteredScores)

// const addedScores = filteredScores.map(score => score + 5)
// console.log(addedScores)

// const finalScores = addedScores.filter(score => score > 80)
// console.log(finalScores)

// const sum = finalScores.reduce((total, score) => total + score, 0)
// console.log(sum)

// const index = scores.findIndex(score => score === 100)
// console.log(index)

// const hasLowScore = scores.some(score => score < 30)
// console.log(hasLowScore)

// const allAbove20 = scores.every(score => score > 20)
// console.log(allAbove20)

// finalScores.forEach(score => console.log(score))



//=========================================================================================================================



const prices = [120, 450, 80, 700, 250, 1200, 90, 550, 300, 1500, 60]


const filteredPrices = prices.filter(price => price > 200)
console.log(filteredPrices)


const reducedPrices = filteredPrices.map(price => price - 50)
console.log(reducedPrices)


const doubledPrices = reducedPrices.map(price => price * 2)
console.log(doubledPrices)


const sum = doubledPrices.reduce((total, price) => total + price, 0)
console.log(sum)


const index = prices.findIndex(price => price > 500)
console.log(index)


const hasExpensivePrice = prices.some(price => price > 1000)
console.log(hasExpensivePrice)


const allAbove50 = prices.every(price => price > 50)
console.log(allAbove50)


doubledPrices.forEach(price => console.log(price))


//=========================================================================================================================================





// 3)const numbers = [12, 7, 24, 9, 36, 15, 42, 5, 18, 27, 30, 11];


// 1. filter() — დატოვე მხოლოდ ლუწი რიცხვები.
// 2. map() — თითოეული რიცხვი გაამრავლე 3-ზე.
// 3. filter() — მიღებული მასივიდან დატოვე მხოლოდ 50-ზე მეტი რიცხვები.
// 4. reduce() — იპოვე დარჩენილი რიცხვების ჯამი.
// 5. findIndex() — იპოვე თავდაპირველ მასივში პირველი რიცხვის ინდექსი, რომელიც 20-ზე მეტია.
// 6. some() — შეამოწმე, არის თუ არა თავდაპირველ მასივში 40-ზე მეტი რიცხვი.
// 7. every() — შეამოწმე, არის თუ არა ყველა რიცხვი დადებითი.
// 8. forEach() — დაბეჭდე საბოლოო მასივის თითოეული რიცხვი.