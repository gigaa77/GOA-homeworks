#5) შექმენი ფუქნცია რომელიც იღებს რიცხვების სიას და აბრუნებს მათ საშუალოს


def average(list1):

    sum = 0
    for i in nums:
        sum += i 
    
    avg = sum // len(nums)

    return avg
nums = [4, 3, 4, 5]

print(average(nums))