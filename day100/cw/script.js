// 1)შექმენით სია და შეიყვანეთ სახელები , შენი დავალებაა while loop იითაც და do while ითაც გამოიტანო სიის ისეთ ელემენტები რომლბის სიგრძე ნაკლებია 4 ზე


let names = ["Giga", "Nika", "Ana", "Saba", "Luka", "Dato"]

let i = 0

while (i < names.length) {
    
    if (names[i].length < 4) {
        console.log(names[i])
    }

    i++
}



let names1 = ["Giga", "Nika", "Ana", "Saba", "Luka", "Dato"]

let x = 0

do {
    if (names[x].length < 4) {
        console.log(names[x])
    }

    x++
} while (x < names.length)
e

// 2)შექმენი სია სადაც მოათავსებ რიცხვებს , შენი დავალებაა რომ გადაუარო for ით ამ სიას და გააჩერო ლუპი მაშინ როდესაც შეხვდები 50 ზე მაღალ რიცხვს,გამოიტანე მანამ ყველა რიცხვი სანამ ასეთ რიცხვს იპოვი , თუ ასეთ რიცხვს იპოვი break ამდე დააკონსოლე რომ num which is greater than 50 is found + NUM 


let nums = [10, 25, 40, 50, 70, 20, 90]

for (let i = 0; i < nums.length; i++) {

    if (nums[i] > 50) {
        console.log("num which is greater than 50 is found", nums[i])
        break
    }

    console.log(nums[i])
}