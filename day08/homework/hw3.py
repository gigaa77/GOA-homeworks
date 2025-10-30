#3) მომხმარებელს შემოატანინე:
#--> ტემპერატურა (temp)
#--> არის თუ არა წვიმა (rain) – მომხმარებელმა შეიყვანოს "yes" ან "no"
#შემდეგ შეამოწმე:
#თუ ტემპერატურა მეტია 25-ზე და rain == "no" -> "შესანიშნავი ამინდია სასეირნოდ!"
#თუ ტემპერატურა მეტია 25-ზე და rain == "yes" -> "ცხელი და წვიმიანია, ჩაფხუტი დაგჭირდება!"
#თუ ტემპერატურა ნაკლებია 10-ზე ან rain == "yes" -> "სჯობს სახლში დარჩე"
#სხვა შემთხვევაში -> "სასიამოვნო ამინდია"

temp=int(input("enter a temperature: "))
rain=input("is it raining outside? (yes/no): ")

if temp > 25 and rain =="no":
    print("it is wonderful weather to go for a walk")
elif temp > 25 and rain =="yes":
    print(" it is hot and rainy outside. you will need a hat")
elif temp < 10 or rain =="yes":
    print("it is better to stay at home")
else:
    print("it is nice weather")