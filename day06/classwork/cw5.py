#5) მოცემულია ორი რიცხვი a და b. თუ  ერთ-ერთი მაინც  მეტია 5-ზე, დაბეჭდე "ერთ-ერთი პირობა მაინც სწორია", წინააღმდეგ შემთხვევაში — "არც ერთი პირობა არ შესრულდა".  

a=int(input("enter your first number: "))
b=int(input("enter your second number: "))

if a >5 or b >5:
    print(" at least one of your statements are true")
else:
    print("neither of your statements are true")