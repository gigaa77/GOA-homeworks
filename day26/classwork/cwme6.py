# შექმენი ცარიელი სია.
# მომხმარებელს შეაყვანინე სიტყვები.
# თუ სიტყვა უკვე არსებობს სიაში → შეწყვიტე შეყვანა.
# სხვა შემთხვევაში დაამატე.
# ბოლოს დაბეჭდე სია.


names = []

while True:
    name = input("enter any name: ")

    if name in names:
        break

    names.append(name)

print(names)