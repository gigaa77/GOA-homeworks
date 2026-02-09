#7) შექმენი ფუქნცია რომელიც მომხმარებელს შემოაყვანინებს რაღაც რიცხვს და დააბრუნებს სიტყვას ეს რიცხვი დადებითია უარყოფითია თუ ნულია

def arvici():

    num = int(input("enter a number: "))

    if num > 0:
        print("positive")
    elif num < 0:
        print("negative")
    else:
        print("zero")

arvici()