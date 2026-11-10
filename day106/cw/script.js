






// 1

// filter() არის მეთოდი, რომელიც მასივიდან ტოვებს მხოლოდ იმ ელემენტებს, რომლებიც არის true.












// 2)


let ages = [20,15,40,53,12,32,17,18,19,33,29,85,67]

let minors = ages.filter(age => age < 18)
let adults = ages.filter(age => age >= 18)

console.log(minors)
console.log(adults)








// 3)


let numbers = [25,111,921,321,432,545,133,987,436];

let newNumber = numbers.map(number => {
    if (number % 2 === 0) {
        return number * 13;
    } else {
        return number * 16;
    }
});

let onlyEven = newNumber.filter(number => number % 2 === 0);

console.log(newNumber);
console.log(onlyEven);