#2) შექმენით ფუნქცია. შექმენით რიცხვებით სავსე სია, დაბეჭდეთ სიის უდიდესი ელემენტი. არ გამოიყენოთ max() ფუნქცია, გამოიყენეთ for ციკლი. გამოიძახეთ ფუნქცია.

def biggest_num():
    nums = [12, 34, 90, 456, 889, 1223, 234, 2344]

    biggest = nums[0]

    for i in nums:
        if i > biggest:
            biggest = i

    print(biggest)

biggest_num()