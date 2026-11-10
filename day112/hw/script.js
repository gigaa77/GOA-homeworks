// let employees = [
//     { name: "Giorgi", salary: 2500, department: "IT" },
//     { name: "Nino", salary: 1800, department: "HR" },
//     { name: "David", salary: 3200, department: "IT" },
//     { name: "Maka", salary: 1500, department: "Sales" },
//     { name: "Saba", salary: 2800, department: "Sales" }
// ];

// let count = 0
// let sum = 0

// employees.forEach(item => {
//     console.log(item.name, item.salary)

//     if (item.department === "IT") {
//         console.log(item)
//     }

//     if (item.salary > 2000) {
//         console.log(item.name)
//     }

//     if (item.department === "Sales") {
//         count++
//     }

//     sum += item.salary
// })

// console.log(count)
// console.log(sum)

// 1. გამოიტანეთ ყველა თანამშრომლის სახელი და ხელფასი.
// 2. გამოიტანეთ მხოლოდ IT განყოფილების თანამშრომლები.
// 3. გამოიტანეთ იმ თანამშრომლების სახელები, რომელთა ხელფასი 2000-ზე მეტია.
// 4. დაითვალეთ, რამდენი თანამშრომელია Sales განყოფილებაში.
// 5. გამოთვალეთ ყველა თანამშრომლის ხელფასების ჯამი.


//==========================================================================================================

// let books = [
//     { title: "Harry Potter", price: 35, pages: 320 },
//     { title: "The Hobbit", price: 28, pages: 280 },
//     { title: "Atomic Habits", price: 45, pages: 250 },
//     { title: "The Alchemist", price: 20, pages: 190 },
//     { title: "Clean Code", price: 55, pages: 450 }
// ];

// let count = 0
// let sum = 0

// books.forEach(item =>{
//     console.log(item.title)
//     if (item.price < 30){
//         console.log(item.title)
//     }
//     if (item.pages > 300){
//         console.log(item.title)
//     }
//     if (item.price >40){
//         count++
//     }
//     sum +=item.price

// })

// let longBooks = books.filter(item=> item.pages >300)
// console.log(longBooks)

// 1. გამოიტანეთ ყველა წიგნის სათაური.
// 2. გამოიტანეთ იმ წიგნების სათაურები, რომელთა ფასი 30-ზე ნაკლებია.
// 3. გამოიტანეთ იმ წიგნების სათაურები, რომელთა გვერდების რაოდენობა 300-ზე მეტია.
// 4. დაითვალეთ, რამდენი წიგნია 40-ზე ძვირი.
// 5. გამოთვალეთ ყველა წიგნის ფასების ჯამი.
// 6. შექმენით ცარიელი მასივი longBooks და დაამატეთ წიგნები, რომლებსაც 300-ზე მეტი გვერდი აქვთ.

//==========================================================================================================




// let players = [
//     { name: "Sandro", sport: "Football", goals: 12 },
//     { name: "Elene", sport: "Tennis", goals: 8 },
//     { name: "Lasha", sport: "Football", goals: 19 },
//     { name: "Tako", sport: "Basketball", goals: 15 },
//     { name: "Data", sport: "Football", goals: 6 }
// ];

// let count = 0
// let sum = 0
// let topPlayers = []

// players.forEach(item => {
//     console.log(item.name, item.sport)

//     if (item.sport === "Football") {
//         console.log(item.name)
//         count++
//     }

//     if (item.goals > 10) {
//         console.log(item.name)
//     }

//     sum += item.goals

//     if (item.goals >= 10) {
//         topPlayers.push(item)
//     }
// })

// console.log(count)
// console.log(sum)
// console.log(topPlayers)

// 1. გამოიტანეთ ყველა სპორტსმენის სახელი და სპორტის სახეობა.
// 2. გამოიტანეთ მხოლოდ ფეხბურთელების სახელები.
// 3. გამოიტანეთ იმ სპორტსმენების სახელები, რომლებსაც 10-ზე მეტი გოლი აქვთ.
// 4. დაითვალეთ, რამდენი სპორტსმენი თამაშობს ფეხბურთს.
// 5. გამოთვალეთ ყველა სპორტსმენის გოლების ჯამი.
// 6. შექმენით ცარიელი მასივი topPlayers და დაამატეთ მასში სპორტსმენები, რომლებსაც 10 ან მეტი გოლი აქვთ.




//===============================================================================



// let orders = [
//     { id: 101, customer: "Nika", total: 250, status: "delivered" },
//     { id: 102, customer: "Ana", total: 80, status: "pending" },
//     { id: 103, customer: "Gio", total: 420, status: "delivered" },
//     { id: 104, customer: "Mariam", total: 150, status: "cancelled" },
//     { id: 105, customer: "Luka", total: 310, status: "pending" }
// ];

// let count = 0
// let sum = 0
// let expensiveOrders = []

// orders.forEach(item => {
//     console.log(item.id, item.customer)

//     if (item.status === "delivered") {
//         console.log(item)
//     }

//     if (item.total > 200) {
//         console.log(item.id)
//     }

//     if (item.status === "pending") {
//         count++
//     }

//     sum += item.total

//     if (item.total > 200 && item.status === "delivered") {
//         expensiveOrders.push(item)
//     }
// })

// console.log(count)
// console.log(sum)
// console.log(expensiveOrders)

// 1. გამოიტანეთ ყველა შეკვეთის ნომერი და მომხმარებლის სახელი.
// 2. გამოიტანეთ მხოლოდ დასრულებული (delivered) შეკვეთები.
// 3. გამოიტანეთ იმ შეკვეთების ნომრები, რომელთა ღირებულება 200-ზე მეტია.
// 4. დაითვალეთ, რამდენი შეკვეთაა pending სტატუსით.
// 5. გამოთვალეთ ყველა შეკვეთის საერთო ღირებულება.
// 6. შექმენით ცარიელი მასივი expensiveOrders და მასში დაამატეთ შეკვეთები, რომელთა ღირებულება 200-ზე მეტია და სტატუსი delivered არის.

// //=================================================================================
// let products = [
//     { name: "Laptop", price: 2500, stock: 8, rating: 4.8 },
//     { name: "Mouse", price: 80, stock: 25, rating: 4.2 },
//     { name: "Keyboard", price: 180, stock: 12, rating: 4.7 },
//     { name: "Monitor", price: 900, stock: 0, rating: 4.9 },
//     { name: "Headphones", price: 350, stock: 15, rating: 4.6 },
//     { name: "Tablet", price: 1200, stock: 5, rating: 3.9 },
//     { name: "Webcam", price: 220, stock: 10, rating: 4.5 }
// ];

// let newArr = products.filter(item => {
//     return item.price > 200 && item.stock >= 5 && item.rating >= 4.5
// })

// newArr.forEach(item => {
//     console.log(item.name, item.price, item.rating)

//     console.log(item.name + " costs " + item.price + " GEL, Rating: " + item.rating)
// })

// მოთხოვნები:
// 1. filter()-ის გამოყენებით შექმენი ახალი სია, რომელშიც მოხვდებიან პროდუქტები, რომელთა ფასი 200-ზე მეტია, მარაგში მინიმუმ 5 ცალია და რეიტინგი 4.5 ან მეტია.
// 2. მიღებულ სიაზე გამოიყენე forEach() და გამოიტანე თითოეული პროდუქტის სახელი, ფასი და რეიტინგი.
// 3. თითოეული პროდუქტისთვის გამოიტანე შეტყობინება შემდეგი ფორმატით:
// Laptop costs 2500 GEL, Rating: 4.8


//=================================================================================================================



// let products = [
//     { name: "Laptop", price: 2500, rating: 4.8 },
//     { name: "Mouse", price: 80, rating: 3.5 },
//     { name: "Keyboard", price: 180, rating: 4.6 },
//     { name: "Monitor", price: 900, rating: 4.2 },
//     { name: "Headphones", price: 350, rating: 4.9 },
//     { name: "Tablet", price: 1200, rating: 3.8 }
// ]

// let newArr = products.filter(item=> item.price> 100)
// newArr.forEach(x=>{
//     console.log(x.name, x.price)

//     return x.rating >=4.5 ?  "Excellent" : "Good"

//     console.log(x.name, x.price, x.rating)
// })

// მოთხოვნები:
// 1. filter()-ით შეარჩიე პროდუქტები, რომელთა ფასი 100 ლარზე მეტია.
// 2. forEach()-ით თითოეული შერჩეული პროდუქტის სახელი და ფასი გამოიტანე.
// 3. Ternary operator-ის გამოყენებით შეამოწმე რეიტინგი: თუ რეიტინგი 4.5 ან მეტია, გამოიტანე "Excellent", სხვა შემთხვევაში — "Good".
// 4. თითოეული პროდუქტისთვის გამოიტანე სახელი, ფასი და შეფასება.

//======================================================================================================