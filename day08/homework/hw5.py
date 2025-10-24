#5) მომხმარებელს შემოატანინე:
#--> მომხმარებლის სახელი (username)
#--> პაროლი (password)
#შეამოწმე:
#თუ მომხმარებელი არის "admin" და პაროლი არის 'superSecretPassword' → "მოგესალმები, ადმინ!"
#თუ მომხმარებელი "guest" და პაროლი არის "1234" → "მოგესალმები, სტუმარო!"
#სხვა შემთხვევაში → "მომხმარებელი არ მოიძებნა!"

username=input("enter your username: ")
password=input("enter your pasword: ")


if username== "admin" and password=="superSecretPassword":
    print("hello admin")
elif username=="guest" and password=="1234":
    print("hello guest")
else:
    print("user not found")