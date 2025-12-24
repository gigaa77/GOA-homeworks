#3) შექმენი list, numbers = [10, 20, 30, 40, 50], მომხმარებელს ჰკითხე ინდექსი და pop()-ით წაშალე შესაბამისი ელემენტი
# დაბეჭდე:
# წაშლილი ელემენტი
# განახლებული list

numbers = [10, 20, 30, 40, 50]


user_input = int(input("enter index: "))

numbers.pop(user_input)

print(numbers)