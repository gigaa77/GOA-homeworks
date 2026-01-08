# შექმენი ცარიელი სია.
# მომხმარებელს შეაყვანინე სიტყვები.
# თუ სიტყვა იწყება ასო "a"-ზე → ჩასვი სიის დასაწყისში,
# სხვა შემთხვევაში → დაამატე ბოლოში.
# შეყვანა შეწყდეს "stop"-ზე.
# დაბეჭდე სია.


names = []

while True:

    name = input("enter any name: (type stop to end: )")

    if name == "stop":
        break

    if name[0] == "a":
        names.insert(0, name)
    else:
        names.append(name)

print(names)