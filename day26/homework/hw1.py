#1) შექმენი ცარიელი სია.მომხმარებელმა შეიყვანოს რიცხვები მანამ, სანამ არ დაწერს "stop".დაამატე მხოლოდ დადებითი რიცხვები სიაში, უარყოფითი რიცხვები არ დაამატო, ბოლოს დაბეჭდე სია


numbers = []


while True:
    num = input('enter any number: (type stop to end): ')

    if num == "stop":
        break

    num = int(num)

    if num > 0:
        numbers.append(int(num))



print(numbers)