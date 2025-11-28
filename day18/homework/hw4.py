# 4)
# მომხმარებელმა შეიყვანოს ტემპერატურა.
# თუ ტემპერატურა მეტია 0-ზე, შიგნით შეამოწმე:

#   თუ მეტია 30-ზე, დაბეჭდე "ცხელა"

#   თუ არა — "ნორმალურია"

# სხვა შემთხვევაში დაუბეჭდე - "ყინვაა"


temp = int(input("enter a temperature: "))


if temp > 0:
    if temp > 30:
        print("it's hot")
    else:
        print("normal temperature")

else:
    print("it's freezing")