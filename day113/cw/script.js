let products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 2500, rating: 4.8, inStock: true },
    { id: 2, name: "Phone", category: "Electronics", price: 1800, rating: 4.5, inStock: false },
    { id: 3, name: "Headphones", category: "Accessories", price: 300, rating: 4.2, inStock: true },
    { id: 4, name: "Keyboard", category: "Accessories", price: 450, rating: 3.9, inStock: true },
    { id: 5, name: "Monitor", category: "Electronics", price: 1200, rating: 4.9, inStock: false },
    { id: 6, name: "Mouse", category: "Accessories", price: 150, rating: 4.6, inStock: true },
    { id: 7, name: "Tablet", category: "Electronics", price: 900, rating: 3.7, inStock: true }
]

// 1. forEach()
// - დაბეჭდე თითოეული პროდუქტის სახელი და ფასი შემდეგი ფორმატით:
//   "Laptop costs 2500 GEL"
// - ცალკე დაბეჭდე მხოლოდ იმ პროდუქტების სახელები, რომლებიც მარაგშია (inStock: true).

products.forEach(item => {
    console.log(item.name + " costs " + item.price + " GEL")

    if (item.inStock === true) {
        console.log(item.name)
    }
})



// 2. filter()
// - შექმენი ახალი სია, სადაც იქნება მხოლოდ Electronics კატეგორიის პროდუქტები.
// - შექმენი ახალი სია, სადაც მოხვდება პროდუქტები, რომელთა ფასი 500-ზე მეტია და რეიტინგი 4.5-ზე მაღალია.
// - შექმენი ახალი სია, სადაც იქნება მხოლოდ ის პროდუქტები, რომლებიც მარაგში არ არის.

let newArr = products.filter(item => item.category === "Electronics")

let newArr1 = products.filter(item => item.price > 500 && item.rating > 4.5)

let newArr2 = products.filter(item => item.inStock === false)

console.log(newArr)
console.log(newArr1)
console.log(newArr2)

// 3. map()
// - შექმენი ახალი სია, რომელშიც თითოეული პროდუქტი წარმოდგენილი იქნება შემდეგი ფორმით:
//   "Laptop - 2500 GEL"
// - შექმენი ახალი სია, სადაც ყველა პროდუქტის ფასი გაზრდილი იქნება 100 ლარით. შეინარჩუნე თითოეული პროდუქტის დანარჩენი ინფორმაცია.


let newArr3 = products.map(item => item.name + " - " + item.price + " GEL")

console.log(newArr3)

let newArr4 = products.map(item => {
    return {
        id: item.id,
        name: item.name,
        category: item.category,
        price: item.price + 100,
        rating: item.rating,
        inStock: item.inStock
    }
})

console.log(newArr4)

// 4. findIndex()
// - იპოვე იმ პროდუქტის ინდექსი, რომლის სახელია "Monitor".
// - იპოვე პირველი პროდუქტის ინდექსი, რომლის რეიტინგიც 4-ზე ნაკლებია.
let index = products.findIndex(item => item.name === "Monitor")

console.log(index)

let index1 = products.findIndex(item => item.rating < 4)

console.log(index1)

// 5. some()
// - შეამოწმე, არსებობს თუ არა ისეთი პროდუქტი, რომლის ფასიც 2000-ზე მეტია.
// - შეამოწმე, არსებობს თუ არა ისეთი პროდუქტი, რომელიც მარაგში არ არის.
let check = products.some(item => item.price > 2000)

console.log(check)

let check1 = products.some(item => item.inStock === false)

console.log(check1)


// 6. every()
// - შეამოწმე, ყველა პროდუქტის ფასი 100-ზე მეტია თუ არა.
// - შეამოწმე, ყველა პროდუქტის რეიტინგი 3.5-ზე მაღალია თუ არა.
// დამატებითი გამოწვევა

let check2 = products.every(item => item.price > 100)

console.log(check2)

let check3 = products.every(item => item.rating > 3.5)

console.log(check3)

//===========================================================================================================

// გამოიყენე რამდენიმე მეთოდი ერთად:
// 1. filter()-ით მიიღე მხოლოდ მარაგში არსებული პროდუქტები.
// 2. მიღებული სიიდან map()-ით შექმენი ახალი სია, სადაც თითოეული ელემენტი იქნება პროდუქტის სახელი და ფასი.
// 3. მიღებული შედეგი დაბეჭდე forEach()-ის გამოყენებით.

let newArr5 = products.filter(item => item.inStock === true)

let newArr6 = newArr5.map(item => item.name + " - " + item.price)

newArr6.forEach(item => {
    console.log(item)
})

// მოთხოვნები
// 1. forEach()
// - დაბეჭდე თითოეული პროდუქტის სახელი და ფასი შემდეგი ფორმატით:
//   "Laptop costs 2500 GEL"
// - ცალკე დაბეჭდე მხოლოდ იმ პროდუქტების სახელები, რომლებიც მარაგშია (inStock: true).
// 2. filter()
// - შექმენი ახალი სია, სადაც იქნება მხოლოდ Electronics კატეგორიის პროდუქტები.
// - შექმენი ახალი სია, სადაც მოხვდება პროდუქტები, რომელთა ფასი 500-ზე მეტია და რეიტინგი 4.5-ზე მაღალია.
// - შექმენი ახალი სია, სადაც იქნება მხოლოდ ის პროდუქტები, რომლებიც მარაგში არ არის.
// 3. map()
// - შექმენი ახალი სია, რომელშიც თითოეული პროდუქტი წარმოდგენილი იქნება შემდეგი ფორმით:
//   "Laptop - 2500 GEL"
// - შექმენი ახალი სია, სადაც ყველა პროდუქტის ფასი გაზრდილი იქნება 100 ლარით. შეინარჩუნე თითოეული პროდუქტის დანარჩენი ინფორმაცია.
// 4. findIndex()
// - იპოვე იმ პროდუქტის ინდექსი, რომლის სახელია "Monitor".
// - იპოვე პირველი პროდუქტის ინდექსი, რომლის რეიტინგიც 4-ზე ნაკლებია.
// 5. some()
// - შეამოწმე, არსებობს თუ არა ისეთი პროდუქტი, რომლის ფასიც 2000-ზე მეტია.
// - შეამოწმე, არსებობს თუ არა ისეთი პროდუქტი, რომელიც მარაგში არ არის.
// 6. every()
// - შეამოწმე, ყველა პროდუქტის ფასი 100-ზე მეტია თუ არა.
// - შეამოწმე, ყველა პროდუქტის რეიტინგი 3.5-ზე მაღალია თუ არა.
// დამატებითი გამოწვევა
// გამოიყენე რამდენიმე მეთოდი ერთად:
// 1. filter()-ით მიიღე მხოლოდ მარაგში არსებული პროდუქტები.
// 2. მიღებული სიიდან map()-ით შექმენი ახალი სია, სადაც თითოეული ელემენტი იქნება პროდუქტის სახელი და ფასი.
// 3. მიღებული შედეგი დაბეჭდე forEach()-ის გამოყენებით.