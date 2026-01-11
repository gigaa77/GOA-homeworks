#8) მომხმარებელს შეაყვანინე 5 რიცხვი while loopით, დაითვალე მათი საშუალო, თუ საშუალო > 50 დაბეჭდე "დიდი საშუალო" წინააღმდეგ შემთხვევაში "პატარა საშუალო"

i = 0
sum = 0

while i < 5:
    num = int(input("enter numbers: "))

    sum += num

    average = sum / 5

    i = i + 1
    
print(average)

    

