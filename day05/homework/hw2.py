#) დაწერეთ კოდი, სადაც მომხმარებელს მოთხოვთ ინფორმაციას მათ შესახებ: სახელი, გვარი, ასაკი, შემდეგ ეს ინფორმაცია გამოიტანეთ როგორც რამე დოკუმენტი, მაგალითად პასპორტი
name=input("enter your name: ")
surname=input("enter your surname: ")
age=int(input("enter your age: "))
birthdate=(input("enter your birthdate, day/month/year: "))

print("======================")
print(f"name: {name}")
print(f"surname: {surname}")
print(f"age: {age}")
print(f"birthdate: {birthdate}")
print("======================")