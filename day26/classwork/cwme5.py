# მომხმარებელს შეაყვანინე სიტყვები.
# თუ სიტყვის სიგრძე ზუსტად 3-ია → დაამატე სიაში.
# სხვა სიტყვები გამოტოვე.
# შეყვანა შეწყდეს "stop"-ზე.
# დაბეჭდე სია.

names = []

while True:

    name = input("enter any name: (write stop to end ): ")

    if name == "stop":
        break
    
    if len(name) == 3:
        names.append(name)


print(names)