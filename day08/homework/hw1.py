#1) მომხმარებელს შემოატანინე ტემპერატურა (რიცხვი) და შემდეგ შეამოწმე:

#თუ ტემპერატურა მეტია 30-ზე -> დაბეჭდე "ძალიან ცხელა!"
#თუ ტემპერატურა მეტია 20-ზე -> დაბეჭდე "სასიამოვნო ამინდია"
#თუ ტემპერატურა მეტია 10-ზე -> დაბეჭდე "ცოტა ცივა"
#თუ ტემპერატურა მეტია 0-ზე -> დაბეჭდე "ცივა, ჩაიცვი თბილად"
#სხვა შემთხვევაში -> "გაიყინები, სახლში დარჩი!"

temperature=int(input("enter a temperature: "))

if temperature > 30:
    print("it is very hot")
elif temperature > 20:
    print("the weather is enjoyable")
elif temperature > 10:
    print("it's a bit cold")
elif temperature > 0:
    print("it is cold outside, dress warmly")
else:
    print("you will freeze, stay at home") 