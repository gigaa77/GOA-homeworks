// 2)რიცხვის შემოწმება — Arrow Function

// შექმენი checkNumber single-line Arrow Function-ის სახით.

// ფუნქციამ მიიღოს რიცხვი და დააბრუნოს:

// "Positive" — თუ რიცხვი დადებითია
// "Negative" — თუ უარყოფითია
// "Zero" — თუ 0-ია


const checkNumber = num => num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero"

console.log(checkNumber(6))

//===============================================================================


// 3)შექმენი getGrade ფუნქცია Function Expression-ის გამოყენებით.

// მიიღოს score და დააბრუნოს:

// 90–100 → "A"
// 80–89 → "B"
// 70–79 → "C"
// 60–69 → "D"
// 0–59 → "F"

// თუ ქულა 0-ზე ნაკლებია ან 100-ზე მეტია → "Invalid score".

const getGrade = function(score) {
    switch(true){
        case score >= 90 && score <=100:
            return "A"
            break
        case score >= 80 && score <90:
            return "B"
            break
        case score >=70 && score < 80:
            return "C"
            break
        case score >=60 && score < 70:
            return "D"
            break
        case score >=0 && score <60:
            return "F"
            break
        default:
            return "Invalid score"
            break
      }
      
}

console.log(getGrade(70))


//========================================================================


// 4)შექმენი checkWord multi-line Arrow Function-ის გამოყენებით.

// ფუნქციამ მიიღოს სიტყვა და:

// გადაიყვანოს lowercase-ში
// შეამოწმოს იწყება თუ არა "a"-თი
// თუ იწყება → დააბრუნოს "Starts with A"
// წინააღმდეგ შემთხვევაში → "Does not start with A"



const checkWord = word => {
    word = word.toLowerCase()

    if (word.startsWith("a")){
        return "Starts with A"
    }else{
        return "Does not start with A"
    }
}


console.log(checkWord("antoni"))


//================================================================================


// 5)შექმენი analyzeNumbers Function Expression-ის გამოყენებით.

// ფუნქციამ მიიღოს 3 რიცხვი და დააბრუნოს ყველაზე დიდი რიცხვი.

// მაგალითად:

// analyzeNumbers(15, 42, 27) //42


const analyzeNumbers = function(num1, num2, num3) {
    return Math.max(num1, num2, num3);

}

console.log(analyzeNumbers(3,6,9))



//=================================================================


// 6)შექმენი analyzeText multi-line Arrow Function.

// ფუნქციამ მიიღოს ტექსტი და დაკონსოლოს:

// ტექსტის სიგრძე
// uppercase ფორმა
// იწყება თუ არა "Hello"-თი

const analyzeText = text => {
    console.log(text.length);
    console.log(text.toUpperCase());
    console.log(text.startsWith("Hello"));
}

analyzeText("sujdfbuisdkf")

//=========================================================================




// 7)მიიღოს:

// price, discount

// წესები:

// თუ discount ≥ 50 → "Discount too high"
// თუ discount < 0 → "Invalid discount"
// სხვა შემთხვევაში გამოითვალოს საბოლოო ფასი.


const finalPrice = (price, discount) => {
    return discount >=50 ? "Discount too high" : discount < 0 ? "Invalid discount" : price - price * discount / 100
}

console.log(finalPrice(100, 30))





//=======================================================================================================




// 8)შექმენი validatePassword multi-line Arrow Function-ის გამოყენებით.

// ფუნქციამ მიიღოს პაროლი და შეამოწმოს:

// სიგრძე მინიმუმ 8 სიმბოლოა?
// შეიცავს თუ არა "@" სიმბოლოს?(მოიძიეთ საჭირო მეთოდი)
// იწყება თუ არა დიდი ასოთი?

// დააბრუნოს:

// "Strong password" — თუ სამივე პირობა სრულდება22222222222222222222222222222222222222003322220233333333200100230
3
// "Weak password" — სხვა შემთხვევაში


const validatePassword = password => {
    if (password.length >= 8 && password.includes("@") && password.charAt(0) === password.charAt(0).toUpperCase()){
        return "Strong password"
    }else{
        return "Weak password"
    }
}

console.log(validatePassword("W22@fsdfghbdf"))


//====================================================================================================



// 9)შექმენი validateUser multi-line Arrow Function-ის სახით.

// მიიღოს:

// username, age, password

// შეამოწმოს:

// username ცარიელი არ არის
// age არის 18 ან მეტი
// password-ის სიგრძე მინიმუმ 8-ია

// თუ ყველაფერი სწორია:

// "User is valid"

// თუ რომელიმე პირობა არ შესრულდა:

// "User is invalid"



const validateUser = (username, age, password) => {
    if (username && username.trim() !== ""  && age >=18 && password.length >=8){
        return "User is valid"
    }else{
        return "User is invalid"
    }
}


console.log(validateUser("Giga", 19, "gigagiga"))