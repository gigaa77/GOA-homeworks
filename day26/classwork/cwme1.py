#შექმენი ცარიელი სია.
# მომხმარებელს შეაყვანინე სიტყვები "stop"-მდე.
# დაამატე მხოლოდ ის სიტყვები, რომელთა სიგრძე 5-ზე მეტია.
# ბოლოს დაბეჭდე სია.

names = []

while True:

    name = input("enter any name: (type stop to end: )")

    if name == "stop":
        break


    elif len(name) >= 5:
        names.append(name)

print(names)