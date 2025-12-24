#5) შექმენი ნებისმიერი list 5 ელემენტით, მომხმარებელს ჰკითხე: გინდა list-ის გასუფთავება? (yes/no), თუ პასუხი "yes"  გამოიყენე clear(), ბოლოს დაბეჭდე list


cities = ["Batumi",  "Tbilisi" , "London", "Paris", "New York"]

user_input = input(" do you want to clear this list? (yes/no): ")

if user_input == "yes":
    cities.clear()


print(cities)