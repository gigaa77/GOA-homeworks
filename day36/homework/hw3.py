# 3) შექმენი ფუქნცია რომელიც მიიღებს რიცხვების სიას [3, 7, 1, 9] და დააბრუნებს ყველაზე დიდ რიცხვს

def largest_num(list1):

    largest = nums[0]
    for i in nums:
        if i > largest:
            largest = i
    
    print(largest)

nums = [3, 7, 1, 9]

largest_num(nums)