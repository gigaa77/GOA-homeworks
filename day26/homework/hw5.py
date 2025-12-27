#5) მომხმარებელს შემოაყვანინე რიცხვები, ეს რიცხვები დაამატე სიაში და გამოითვალე ამ რიცხვების საშუალო არითმეტიკული.


nums = []

sum = 0

for i in range(0, 5):

    num = int(input("enter any number: "))

    nums.append(num)
    
    sum += nums[i]

    average = sum / len(nums)



print(average)
