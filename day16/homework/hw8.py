#8)
# შექმენი ცვლადი და შეინახე შენი პაროლი(string)

# მომხმარებელს შემოატანინე პაროლი

# სანამ შენი პაროლი არ უდრის მომხმარებლის მიერ შემოტანილ პაროლს
#     მომხმარებელს თავიდან შემოატანინე პაროლი რომ გაარტყას შენ პაროლს
# დაპრინტე "სწორია გაარტყი"

# --> გადააკეთეთ ზემოთ მოცემული ტექსტი კოდად(ინდენტაცია დაცულია)



password = "gigaa77"

user_password = input("enter your password: ")


while password != user_password:
    user_password = input("enter your password: ")


print("congrats you have guessed the password")