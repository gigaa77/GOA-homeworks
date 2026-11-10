
// მოთხოვნები:
// 1. შექმენი name getter, რომელიც დააბრუნებს მოთამაშის სახელს. თუ სახელი 3 სიმბოლოზე ნაკლებია, დააბრუნოს "Invalid name!".
// 2. შექმენი level getter, რომელიც შეამოწმებს მოთამაშის დონეს:
//    - თუ level მეტია ან ტოლია 10-ის, დააბრუნოს "Advanced Player".
//    - თუ level მეტია ან ტოლია 5-ის, დააბრუნოს "Intermediate Player".
//    - სხვა შემთხვევაში დააბრუნოს "Beginner Player".
// 3. შექმენი status getter, რომელიც შეამოწმებს მოთამაშის მდგომარეობას:
//    - თუ _health უდრის 0-ს, დააბრუნოს "Player is dead".
//    - თუ _health ნაკლებია 30-ზე, დააბრუნოს "Critical condition".
//    - სხვა შემთხვევაში დააბრუნოს "Player is healthy".
// 4. შექმენი accountInfo getter, რომელიც ერთ სტრიქონში დააბრუნებს მოთამაშის სრულ ინფორმაციას შემდეგი ფორმატით:
// Player: Shadow | Level: Advanced Player | Health: 75 | Status: Player is healthy | Online: Yes



let player = {
    _name: "Shadow",
    _level: 12,
    _health: 75,
    _online: true,

    get name() {
        if (this._name.length < 3) {
            return "Invalid name!"
        } else {
            return this._name
        }
    },

    get level() {
        if (this._level >= 10) {
            return "Advanced Player"
        } else if (this._level >= 5) {
            return "Intermediate Player"
        } else {
            return "Beginner Player"
        }
    },

    get status() {
        if (this._health === 0) {
            return "Player is dead"
        } else if (this._health < 30) {
            return "Critical condition"
        } else {
            return "Player is healthy"
        }
    }
}

console.log(player.name)
console.log(player.level)
console.log(player.status)





//=================================================



let user = {
    name: "Giga Gogitidze",
    _email: "giga20092@gmail.com",
    _password: "12345",

    get email() {
        return this._email
    },

    set email(value) {
        this._email = value
    },

    get password() {
        return this._password
    },

    set password(value) {
        this._password = value
    }
}

user.email = "nedgdgd@gmail.com"
user.password = "898760"

console.log(user.email)
console.log(user.password)