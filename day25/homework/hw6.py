#6) შექმენი ცარიელი list, მომხმარებელს 5-ჯერ შეაყვანინე რიცხვი, ყველა დაამატე list-ში და საბოლოოდ for loop-ის გამოყენებით დააჯამე რიცხვები რომელიც გექნება ლისტში

nums = []

num1 = int(input("enter first number: "))
num2 = int(input("enter second  number: "))
num3 = int(input("enter third number: "))
num4 = int(input("enter fourth number: "))
num5 = int(input("enter fifth number: "))

nums.append(num1)
nums.append(num2)
nums.append(num3)
nums.append(num4)
nums.append(num5)

sum = 0
for i in nums:
    sum+= i

print(sum)

