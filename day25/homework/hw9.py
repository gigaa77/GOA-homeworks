#9) შექმენი list: nums = [1, 2, 3, 4] მომხმარებელს შეაყვანინე: ინდექსი და რიცხვი, თუ ინდექსი list-ის საზღვრებშია გამოიყენე insert() ჩასამატებლად, თუ ინდექსი ლისტზე დიდია მაშინ გამოიყენე append()

nums = [1, 2, 3, 4]

num = int(input("enter any number: "))

index = int(input("enter index (0-4): "))

if index>=0 and index < len(nums):
    nums.insert(index, num)
else:
    nums.append(num)

print(nums)