#5) მომხმარებელს შეაყვანინე რიცხვები, მანამ სანამ არ შეიყვანს 0, ყოველი რიცხვის შემდეგ დაბეჭდე "დადებითია" ან "უარყოფითია".დაბეჭდე ბოლოს რიცხვების ჯამი. გამოიყენე while loop.


sum = 0

while True:
    num = int(input("enter numbers: "))

    if num > 0:
        print("number is positive")
    elif num < 0:
        print("number is negative")
    else:
        break

    sum += num

print(sum)

