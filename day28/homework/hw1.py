#1) მომხმარებელს შემოაყვანინე წინადადება. დაბეჭდე თითოეული სიტყვა ცალ–ცალკე for loop-ის გამოყენებით. თითოეული სიტყვა დაბეჭდე capitalize()-ით.

sentence = input("enter any sentence: ")

words = []

words = sentence.split()

for i in words:
    print(i.capitalize())



