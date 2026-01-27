nums = [1,  3, 4, 56, 6, 78, 90, 34, 456, 6789]

nums1 = []

for i in nums:

    if len(str(i)) >=2 or nums.index(i) % 2==0:
        nums1.append(i)
    else:
        nums.insert(nums.index(i), i)
        

print(nums)

print(nums1)
    