#8) შექმენი list: animals = ["dog", "cat", "horse", "cow"] მომხმარებელს შეაყვანინე ცხოველის სახელი, თუ არსებობს  დაბეჭდე მისი index-იმ, თუ არა  "Animal not found"

animals = ["dog", "cat", "horse", "cow"] 

user_input = input("enter your favourite animal: ")

if user_input in animals:
    print(animals.index(user_input))
else:
    print("animal not found")


