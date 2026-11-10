// 1)შექმენი ფუნქცია editProducts(products), რომელსაც გადაეცემა პროდუქტების სია.

// მაგალითად:

// ["Laptop", "Mouse", "Keyboard", "Monitor"]

// ფუნქციამ უნდა:

// დასაწყისში დაამატოს "Phone"
// ბოლოში დაამატოს "Headphones"
// ამოიღოს ბოლო ელემენტი
// "Mouse" ჩაანაცვლოს "Webcam"-ით
// დააბრუნოს საბოლოო სია



// function editProducts(products) {
//     products.unshift("Phone")
//     products.push("Headphones")
//     products.pop()
//     products.splice(2, 1, "Webcam")

//     return products
// }

// console.log(editProducts(["Laptop", "Mouse", "Keyboard", "Monitor"]))

//====================================================================================================================


// 2)შექმენი ფუნქცია organizeNumbers(numbers).

// მოცემულია:

// [10, 20, 30, 40, 50, 60, 70, 80]

// ფუნქციამ უნდა:

// slice()-ით გამოყოს პირველი 4 ელემენტი;
// slice()-ით გამოყოს ბოლო 4 ელემენტი;
// მეორე სიის დასაწყისში დაამატოს 100;
// პირველ სიას ბოლოში დაამატოს 5;
// concat()-ით გააერთიანოს ორივე;
// დააბრუნოს საბოლოო სია.


// function organizeNumbers(numbers){
//     let numbers1 = numbers.slice(0,4)
//     let numbers2 = numbers.slice(4)
//     numbers2.unshift(100)
//     numbers1.push(5)
//     let numbersAll = numbers1.concat(numbers2)

//     return numbersAll
// }


// console.log(organizeNumbers([10, 20, 30, 40, 50, 60, 70, 80]))


//====================================================================================================================

// 3)შექმენი ფუნქცია studentManager(students).

// ["Giorgi", "Nika", "Ana", "Luka", "Saba"]

// ფუნქციამ უნდა:

// ამოიღოს პირველი სტუდენტი;
// დაამატოს "Mariam" დასაწყისში;
// დაამატოს "Dato" ბოლოში;
// "Luka" ჩაანაცვლოს "Gabrieli"-ით splice()-ის გამოყენებით;
// საბოლოო სიიდან slice()-ით შექმნას ახალი სია, რომელიც შეიცავს მხოლოდ პირველ 4 სტუდენტს;
// დააბრუნოს ახალი სია.


// function studentManager(students){
//     students.splice(0,1 ,"Mariam")
//     students.push("Dato")
//     students.splice(3,1, "Gabrieli")
//     let newStudents = students.slice(0,4)

//     return newStudents
// }


// console.log(studentManager(["Giorgi", "Nika", "Ana", "Luka", "Saba"]))




//====================================================================================================================





// 4)შექმენი ფუნქცია shoppingCart(cart).

// ["Bread", "Milk", "Cheese", "Apple", "Juice"]

// ფუნქციამ უნდა:

// დასაწყისში დაამატოს "Water";
// ბოლოში დაამატოს "Chocolate";
// ამოიღოს პირველი ელემენტი;
// splice()-ით "Cheese" ჩაანაცვლოს "Yogurt"-ით;
// slice()-ით შექმნას სიის პირველი 4 ელემენტის ასლი;
// დააბრუნოს ეს ახალი სია.


// function shoppingCart(cart) {
//     cart.unshift("Water")
//     cart.push("Chocolate")
//     cart.shift()
//     cart.splice(2, 1, "Yogurt")

//     let newCart = cart.slice(0, 4)

//     return newCart
// }

// console.log(shoppingCart(["Bread", "Milk", "Cheese", "Apple", "Juice"]))



//====================================================================================================================



// 5)შექმენი ფუნქცია:

// finalList(numbers)

// მოცემულია:

// [15, 25, 35, 45, 55, 65]

// ფუნქციამ უნდა:

// შეამოწმოს Array.isArray()-ით, ნამდვილად სია გადაეცა თუ არა;
// თუ სია არ არის, დააბრუნოს "Not an array";
// თუ სიაა:
// shift()-ით ამოიღოს პირველი ელემენტი;
// unshift()-ით დასაწყისში დაამატოს 100;
// pop()-ით ამოიღოს ბოლო;
// push()-ით ბოლოში დაამატოს 200;
// splice()-ით შუაში დაამატოს 300;
// slice()-ით შექმნას საბოლოო სიის ასლი;
// დააბრუნოს ეს ასლი.



// function finalList(numbers) {
//     if (!Array.isArray(numbers)) {
//         return "Not an array"
//     }

//     numbers.shift()
//     numbers.unshift(100)
//     numbers.pop()
//     numbers.push(200)
//     numbers.splice(2, 0, 300)

//     let newNumbers = numbers.slice()

//     return newNumbers
// }

// console.log(finalList([15, 25, 35, 45, 55, 65]))


//====================================================================================================================


// 6)მოცემულია:
// let students = [
//     ["Giorgi", 18],
//     ["Nika", 20],
//     ["Luka", 17],
//     ["Saba", 19]
// ]
// შექმენი ფუნქცია getStudent(students), რომელმაც უნდა:

// გამოიტანოს პირველი სტუდენტის სახელი
// გამოიტანოს მეორე სტუდენტის ასაკი
// შეცვალოს მესამე სტუდენტის ასაკი 18-ზე
// დააბრუნოს განახლებული სია.



// let students = [
//     ["Giorgi", 18],
//     ["Nika", 20],
//     ["Luka", 17],
//     ["Saba", 19]
// ]

// function getStudent(students) {
//     console.log(students[0][0])
//     console.log(students[1][1])

//     students[2][1] = 18

//     return students
// }

// console.log(getStudent(students))


//====================================================================================================================




// 7)
// let products = [
//     ["Laptop", 2500],
//     ["Phone", 1500],
//     ["Mouse", 80],
//     ["Keyboard", 120]
// ]
// შექმენი ფუნქცია updateProducts(products).
// ფუნქციამ უნდა:

// "Laptop"-ის ფასი შეცვალოს 2300-ზე
// "Mouse"-ის ფასი გაზარდოს 100-მდე
// "Phone"-ის შემდეგ ჩასვას:["Tablet", 900]
// წაშალოს ბოლო პროდუქტი
// დააბრუნოს საბოლოო სია



// let products = [
//     ["Laptop", 2500],
//     ["Phone", 1500],
//     ["Mouse", 80],
//     ["Keyboard", 120]
// ]

// function updateProducts(products) {
//     products[0][1] = 2300
//     products[2][1] = 100

//     products.splice(2, 0, ["Tablet", 900])

//     products.pop()

//     return products
// }

// console.log(updateProducts(products))


//====================================================================================================================




// 9)for ციკლის გამოყენებით დაბეჭდე რიცხვები 1-დან 10-მდე.

// for (let i = 1; i <= 10; i++) {
//     console.log(i)
// }


// 10)for-ის გამოყენებით დაბეჭდე 1-დან 20-მდე ყველა ლუწი რიცხვი.


// for (let i = 2; i <= 20; i++) {
//     if (i % 2 == 0){
//         console.log(i)
//     }
    
// }


// 11) 1-დან 100-მდე ჯამი


// let sum = 0

// for (let i = 1; i <= 100; i++) {
//     sum += i
// }

// console.log(sum)


// 14)ფორ ით გამოიტანე შენი სახელი 20 ჯერ

// for (let i = 1; i <= 20; i++) {
//     console.log("Giga")
// }