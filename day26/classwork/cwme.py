#შექმენი ცარიელი სია.
# მომხმარებელმა შეიყვანოს რიცხვები.
# თუ რიცხვი 5-ზე იყოფა → დაამატე სიის ბოლოში,
# სხვა შემთხვევაში → სიის დასაწყისში.
# შეყვანა შეწყდეს "stop"-ზე.
# ბოლოს დაბეჭდე სია.

nums = []

while True:
    
    num = input("enter any number: (type top to end: )")

    if num == "stop":
        break

    num = int(num)

    if num % 5 == 0:
        nums.append(num)
    else:
        nums.insert(0, num)

    if num == "stop":
        break

print(nums)


print("==========================================================================")




# შექმენი ცარიელი სია.
# მომხმარებელს შეაყვანინე რიცხვები.
# ყოველი ახალი რიცხვი დაამატე სიაში.
# თუ სიაში ელემენტების რაოდენობა გახდება 10, შეწყვიტე შეყვანა.
# დაბეჭდე სია და მისი სიგრძე.


nums = []

while True:

    num = int(input("enter any number: "))
    
    nums.append(num)

    if len(nums) == 10:
        break

print(nums)

print(len(nums))