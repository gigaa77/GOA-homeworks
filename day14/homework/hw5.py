#მომხმარებელს შემოატანინეთ რიცხვი სანამ თქვენს მიერ ჩაფიქრებულ რიცხვს არ შემოიტანს.

secret_number=7

user_input= None

i=0


while user_input != secret_number:
    user_input=int(input("enter a number: "))
    i = i+1
    if user_input != secret_number:
        print("incorrect, try again")
    
    
print("congratulations! you have guessed the secret number.") 