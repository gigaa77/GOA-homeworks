#6) მომხმარებელს შეაყვანინე ასაკი მანამ, სანამ არ შეიყვანს -1. დაბეჭდე რამდენი ადამიანი იყო არასრულწლოვანი, სრულწლოვანი, პენსიონერი. გამოიყენე while loop + if/elif/else

under_age = []

adult = []

retired = []



while True:
    age = int(input("enter your age: "))

    if age < 18 and age != -1:
        under_age.append(age)
    elif age >= 18 and age < 65:
        adult.append(age)
    elif age >= 65:
        retired.append(age)
    else:
        break

print(f"amount of people who are under_age: {len(under_age)}")

print(f"amount of people who are adults: {len(adult)}")


print(f"amount of people who are retired: {len(retired)}")

    