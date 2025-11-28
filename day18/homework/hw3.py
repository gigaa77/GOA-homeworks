# 3)
# მომხმარებელს შემოაყვანინე  რიცხვი.

# თუ რიცხვი დადებითია, შიგნით შეამოწმე:

#     თუ ლუწია, დაბეჭდე "დადებითი ლუწი".

#     თუ არა — "დადებითი კენტი".

# სხვა შემთხვევაში დაბეჭდე --> "რიცხვი უარყოფითია"



number = int(input("enter a number: "))

if number > 0:
    if number % 2 == 0:
        print("positive even")
    else:
        print("positive odd")

else:
    print("number is negative")