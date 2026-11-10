let company = {
    name: "TechVision",
    founded: 2010,

    headquarters: {
        country: "Georgia",
        city: "Tbilisi",

        address: {
            street: "Chavchavadze",
            building: {
                number: 25,
                floors: 8,

                departments: {
                    firstFloor: {
                        name: "Reception",
                        employees: 4
                    },

                    fifthFloor: {
                        name: "Development",
                        employees: 35,

                        manager: {
                            name: "Giorgi",
                            age: 32,

                            contact: {
                                email: "giorgi@techvision.com",
                                phone: "555123456"
                            }
                        }
                    }
                }
            }
        }
    },

    projects: {
        project1: {
            name: "Website",
            budget: 15000,

            team: {
                leader: "Nika",
                members: 8,

                technology: {
                    frontend: "React",
                    backend: "Node.js",
                    database: "MongoDB"
                }
            }
        },

        project2: {
            name: "Mobile App",
            budget: 25000,

            team: {
                leader: "Ana",
                members: 12,

                technology: {
                    frontend: "React Native",
                    backend: "Python",
                    database: "PostgreSQL"
                }
            }
        }
    }
}



// 1. გამოიტანე კონსოლში კომპანიის სახელი და დაარსების წელი.

console.log(company.name, company.founded)

// 2. გამოიტანე კომპანიის შტაბ-ბინის ქალაქი და ქვეყანა.

console.log(company.headquarters.city, company.headquarters.country)

// 3. გამოიტანე შენობის ნომერი და სართულების რაოდენობა.

console.log(company.headquarters.address.building.number, company.headquarters.address.building.floors)

// 4. გამოიტანე პირველი სართულის განყოფილების სახელი და თანამშრომლების რაოდენობა.

console.log(company.headquarters.address.building.departments.firstFloor.name, company.headquarters.address.building.departments.firstFloor.employees)

// 5. გამოიტანე მეხუთე სართულზე არსებული განყოფილების სახელი და თანამშრომლების რაოდენობა.

console.log(company.headquarters.address.building.departments.fifthFloor.name, company.headquarters.address.building.departments.fifthFloor.employees)

// 6. გამოიტანე მეხუთე სართულის მენეჯერის სახელი და ასაკი.

console.log(company.headquarters.address.building.departments.fifthFloor.manager.name, company.headquarters.address.building.departments.fifthFloor.manager.age)

// 7. გამოიტანე მენეჯერის ელფოსტა და ტელეფონის ნომერი.

console.log(company.headquarters.address.building.departments.fifthFloor.manager.contact.email, company.headquarters.address.building.departments.fifthFloor.manager.contact.phone)

// 8. გამოიტანე პირველი პროექტის სახელი, ბიუჯეტი და გუნდის ხელმძღვანელის სახელი.

console.log(company.projects.project1.name, company.projects.project1.budget , company.projects.project1.team.leader)


// 9. გამოიტანე მეორე პროექტის გუნდის წევრების რაოდენობა და გამოყენებული მონაცემთა ბაზა.

console.log(company.projects.project2.team.members, company.projects.project2.team.technology)

// 10. გამოიტანე მეორე პროექტის სამივე ტექნოლოგია: frontend, backend და database.

console.log(company.projects.project2.team.technology.frontend, company.projects.project2.team.technology.backend, company.projects.project2.team.technology.database)

// 11. კომპანიის სახელი შეცვალე "TechWorld"-ით.

company.name = "TechWorld"

// 12. შტაბ-ბინის ქალაქი შეცვალე "Batumi"-ით.

company.headquarters.city = "Batumi"

// 13. შენობის ნომერი შეცვალე 40-ით, ხოლო სართულების რაოდენობა — 10-ით.

company.headquarters.address = 40

company.headquarters.floors = 10

// 14. პირველი სართულის თანამშრომლების რაოდენობა შეცვალე 7-ით.

company.headquarters.address.building.departments.firstFloor.employees = 7

// 15. მეხუთე სართულის განყოფილების სახელი შეცვალე "Software Development"-ით.

company.headquarters.address.building.departments.fifthFloor.name = "Software Development"

// 16. მენეჯერის ასაკი შეცვალე 35-ით.

company.headquarters.address.building.departments.fifthFloor.manager.age = 35

// 17. მენეჯერის ტელეფონის ნომერი შეცვალე "599123456"-ით.

company.headquarters.address.building.departments.fifthFloor.manager.contact.phone = "599123456"

// 18. პირველი პროექტის ბიუჯეტი შეცვალე 20000-ით.

company.projects.project1.budget = 20000

// 19. მეორე პროექტის გუნდის ხელმძღვანელი შეცვალე "Giorgi"-ით, ხოლო გუნდის წევრების რაოდენობა — 15-ით.

company.projects.project2.team.leader.name = "Giorgi"

company.projects.project2.team.members = 15

// 20. პირველი პროექტის frontend შეცვალე "Vue.js"-ით, ხოლო database — "MySQL"-ით.

company.projects.project2.team.technology.frontend = "Vue.js"

company.projects.project2.team.technology.database = "MySQL"

// 21. კომპანიის მთავარ ობიექტს დაამატე თვისება employees, რომლის მნიშვნელობა იქნება 150.

company.employees = 150

// 22. შტაბ-ბინის ობიექტს დაამატე თვისება postalCode, რომლის მნიშვნელობა იქნება "0108".

company.headquarters.postalCode = "0108"

// 23. შენობის ობიექტს დაამატე თვისება hasElevator, რომლის მნიშვნელობა იქნება true.

company.headquarters.address.building.hasElevator = true


// 24

company.headquarters.address.building.departments.firstFloor.phone = "0322000000"

// 25
company.headquarters.address.building.departments.fifthFloor.budget = 50000

// 26
company.headquarters.address.building.departments.fifthFloor.manager.salary = 6000

// 27
company.headquarters.address.building.departments.fifthFloor.manager.contact.linkedIn = "giorgi-techvision"

// 28
company.projects.project1.team.designer = "Mariam"

// 29
company.projects.project2.team.technology.testing = "Jest"

// 30
company.projects.project2.status = "In Progress"

// 31
delete company.founded

// 32
delete company.headquarters.country

// 33
delete company.headquarters.address.building.floors

// 34
delete company.headquarters.address.building.departments.firstFloor.employees

// 35
delete company.headquarters.address.building.departments.fifthFloor.manager.age

// 36
delete company.headquarters.address.building.departments.fifthFloor.manager.contact.phone

// 37
delete company.projects.project1.team.technology.database

// 38
delete company.projects.project2.team.members

// 39
delete company.projects.project1.budget

// 40
delete company.projects.project2.team.technology.backend

//=====================================================================================================================================


// 1)გოგა, დავალებებს ოდნავ გავამარტივებ: დავტოვებ საინტერესო ლოგიკას და this-ის გამოყენებას, მაგრამ მოვაშორებ ზედმეტად რთულ პირობებს. დავალებები იქნება საშუალო სირთულის და თანდათან გართულდება.
// JavaScript — ობიექტის მეთოდები (Methods)
// დავალება 1. მოთამაშის მართვა
// შექმენი ობიექტი player, რომელსაც ექნება შემდეგი თვისებები:
let player = {
    name: "Shadow",
    health: 100,
    energy: 80,
    level: 1,

    showInfo(){
    return `name : ${player.name}, health: ${player.health}, energy: ${player.energy}, level: ${player.level}`
    },

    takeDamage(num){
        player.health -= num
    },

    heal(healNum){
        player.health += healNum
    },

    levelUp(){
        player.level++
    },

    useEnergy(amount){
        player.energy -= amount
    }


}

// დაამატე შემდეგი მეთოდები:
// 1. showInfo — გამოიტანს მოთამაშის სახელს, ჯანმრთელობას, ენერგიასა და დონეს.
// 2. takeDamage(amount) — შეამცირებს ჯანმრთელობას გადაცემული რიცხვით.
// 3. heal(amount) — გაზრდის ჯანმრთელობას გადაცემული რიცხვით.
// 4. levelUp() — მოთამაშის დონეს გაზრდის ერთით.
// 5. useEnergy(amount) — შეამცირებს ენერგიას გადაცემული რიცხვით.


//=====================================================================================================================================

// 2)შექმენი ობიექტი bankAccount:
// let bankAccount = {
//     owner: "Goga",
//     balance: 1500,
//     currency: "GEL"
// };

// დაამატე შემდეგი მეთოდები:
// 1. showBalance() — გამოიტანს ანგარიშის მფლობელსა და ბალანსს.
// 2. deposit(amount) — ანგარიშზე დაამატებს მითითებულ თანხას.
// 3. withdraw(amount) — ანგარიშიდან გამოიტანს მითითებულ თანხას, თუ საკმარისი თანხაა.
// 4. showInfo() — გამოიტანს ანგარიშის ყველა თვისებას.
// პირობა: თუ ანგარიშზე საკმარისი თანხა არ არის, გამოიტანე შეტყობინება "Not enough money!".

let bankAccount = {
    owner: "Goga",
    balance: 1500,
    currency: "GEL",

    showBalance() {
        console.log(`Owner: ${this.owner}, Balance: ${this.balance} ${this.currency}`)
    },

    deposit(amount) {
        this.balance += amount
    },

    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount
        } else {
            console.log("Not enough money!")
        }
    },

    showInfo() {
        console.log(this)
    }
};