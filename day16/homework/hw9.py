#9)შექმენით კალკულატორი როგორიც ჩვენ გავაკეთეთ,დაუმატეთ სხვა მათემატიკური ოპერატორები,ასევე დაუმატეთ შედარების ოპერატორებიც 



number1= float(input("enter first number: "))
number2= float(input("enter second number: "))

operator = input("enter Mathematical operator: +; -; *; /; **; %; >; < :  ")


if operator == "+":
    print(number1 + number2)

elif operator == "-":
    print(number1 - number2)

elif operator == "*":
    print(number1 * number2)

elif operator == "/":
    print(number1 / number2)

elif operator == "**":
    print(number1 ** number2)
    
elif operator == "%":
    print(number1 % number2)

elif operator == ">":
    if number1 > number2:
        print("true")
    else:
        print("false")

elif operator == "<":
    if number1 < number2:
        print("ture")
    else:
        print("false")


