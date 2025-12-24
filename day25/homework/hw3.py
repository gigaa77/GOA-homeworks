#3) შექმენი list: nums = [1, 2, 3, 2, 4, 2, 5] მომხმარებელს შემოაყვანინე რიცხვი, count()-ით დაითვალე რამდენჯერ გვხვდება ეს რიცხვი, დაბეჭდე პასუხი

nums = [1, 2, 3, 2, 4, 2, 5]

num = int(input("enter any number: "))

count = nums.count(num)

print(f"number {num}, appears {count} times")