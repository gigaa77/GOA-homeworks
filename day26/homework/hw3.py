#3) შექმენი ცარიელი სია. მომხმარებელს შემოაყვანინე რიცხვები, ყოველი რიცხვი დაამატე სიაში,როცა სიაში მყოფი რიცხვების ჯამი გახდება 100-ზე მეტი, შეწყვიტე რიცხვების შეყვანა, ბოლოს დაბეჭდე სია და მათი ჯამი


nums = []

total = 0

while True:

    num = int(input('enter any number: (type stop to end): '))

    nums.append(num)

    total += num

    if total > 100:
        break


print(nums)
print(total)



    



    