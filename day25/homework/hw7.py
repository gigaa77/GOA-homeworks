#7) შექმენი list: letters = ["a", "b", "c", "d", "e"] მომხმარებელს შეაყვანინე ინდექსი, pop()-ით წაშალე ამ ინდექსზე მდგომი ელემენტი, დაბეჭდე წაშლილი ელემენტი და list

letters = ["a", "b", "c", "d", "e"]
index = int(input("enter index (0-4): "))

letter = letters.pop(index)

print(letter)

print(letters)

