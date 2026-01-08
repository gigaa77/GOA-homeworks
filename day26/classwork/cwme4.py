# მომხმარებელს შეაყვანინე სიტყვები.
# თუ ორი მეზობელი სიტყვა ერთნაირი სიგრძისაა → წაშალე მეორე.
# დაბეჭდე საბოლოო სია.


names = []

i = 0

while True:
    name = input(" enter any name: (enter stop to end ): ")

    if name == "stop":
        break

    names.append(name)

i = 0
while i < len(names) - 1:
    if len(name[i]) == len(name[i + 1]):
        names.pop(i + 1)

    else:
        i = i + 1


print(names)