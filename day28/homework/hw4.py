#4) მომხმარებელს შემოაყვანინე 5 რიცხვი, დაბეჭდე მათი ჯამი. გამოიყენე for loop და while loop.


sum = 0
for i in range(0,5):
    num = int(input("enter numbers to sum: ")) 

    sum += num

print(sum)


print("===========================================")

i = 0
sum = 0

while i < 5:
    num = int(input("enter numbers to sum: ")) 

    sum += num

    i = i + 1

print(sum)