// შექმენით ობიექტი სახელად person 

// ამ ობიექტში უნდა გქონდეთ შემდეგი property - ები 

// ====მარტივი ქიებით შექმენით===
// სახელი
// გვარი
// ასაკი
// ჰობი
// ====რთული ქიებით შექმენით===
// საყვარელი საჭმელი
// ფავორიტი ავტომობილი
// სასწავლო საგანი

// შენი დავალებაა რომ კონსოლში გამოიტანო ამ ობიექტის ყველა მნიშვნელობა

// მარტივი მნიშვნელობები გამოიტანეთ dot notation ით
// რთული მნიშვნელობები გამოიტანეთ bracket notation ით
// ბოლოს დაპრინტეთ მთლიანი ობიექტიც


const person = {
    name : "giga",
    surname : "gogitidze",
    age : 16,
    hobby : "box",

    "favorite food" : "shawarma",
    "fav car" : "mercedes",
    "fav subject" : "math"

}

console.log(person.name)
console.log(person.surname)
console.log(person.age)
console.log(person.hobby)

console.log(person["fav subject"])
console.log(person["fav car"])
console.log(person["favorite food"])

console.log(person)
