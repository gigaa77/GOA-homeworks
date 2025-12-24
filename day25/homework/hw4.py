#4) შექმენი list: colors = ["red", "blue", "green", "yellow"] მომხმარებელს შეაყვანინე ფერი, თუ არსებობს  დაბეჭდე მისი index(), თუ არა  დაბეჭდე "Not found"

colors = ["red", "blue", "green", "yellow"]

user_color = input("enter your favourite color: ")

if user_color in colors:
    print(colors.index(user_color))
else:
    print("not found")