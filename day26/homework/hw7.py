#7) მომხმარებელს შემოაყვანინე რიცხვები, ეს რიცხვები დაამატე სიაში, თუ ორი მეზობელი ელემენტის ჯამი <50-ზე მაშინ წაშალე მეორე ელემენტი, დაბეჭდე საბოლოო სია.

nums = []

sum = 0

for i in range(0,10):

    num = int(input("enter any number: "))

    nums.append(num)

i = 0
while i < len(nums) - 1:

    sum = nums[i] + nums[i + 1]

    if sum < 50:

        nums.pop(i + 1)

    else:
        
        i = i + 1

print(nums)