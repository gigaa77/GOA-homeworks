#2) შექმენი ცარიელი სია. მომხმარებელს შეაყვანინე რიცხვები სანამ "stop"-ს არ დაბეჭდავს, ყოველი ახალი რიცხვი: თუ ნაკლებია 50-ზე → ჩასვი სიის დასაწყისში (insert), თუ მეტია ან ტოლია 50-ის → დაამატე ბოლოში (append), ბოლოს დაბეჭდე სია

numbers = []

while True:
    num = input("enter any number: (say stop to end): ")

    if num == "stop":
        break

    num = int(num)

    if num < 50:
        numbers.insert(0, num)
    
    elif num >= 50:
        numbers.append(num)

print(numbers)