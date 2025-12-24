#2) შექმენი ცარიელი list
# მომხმარებელს 3-ჯერ შეაყვანინე სიტყვა და append()-ით დაამატე list-ში
# ბოლოს დაბეჭდე list

names = []

user_input1 = input("enter your first word: ")
user_input2 = input("enter your second word: ")
user_input3 = input("enter your third word: ")

names.append(user_input1)
names.append(user_input2)
names.append(user_input3)

print(names)