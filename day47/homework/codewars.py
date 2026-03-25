#codewars 1

# if len(s) % 2 == 0:
#         return s[len(s)//2 - 1] + s[len(s)//2]
#     else:
#         return s[len(s)//2]






#codewars2

# def is_anagram(test, original):
#     return sorted(original.lower()) == sorted(test.lower()) 

#sorted- ფუნქცია რომელიც ანბანის მიხედვით ალაგებს ასოებს სიაში. (შეგვიძ₾ია გამოვიყენოთ სტრინგებთან)

#codwars3 







# def maskify(cc):
#     result = ""
    
#     for i in range(len(cc)):
#         if i < len(cc) - 4:
#             result += "#"
#         else:
#             result += cc[i]
    
#     return result



#codewars 4

# def check_exam(arr1,arr2):
#     score = 0
    
#     for i in range(len(arr1)):
#         if arr2[i] == "":
#             score += 0
#         elif arr1[i] == arr2[i]:
#             score += 4
#         else:
#             score -= 1
    
#     if score < 0:
#         return 0
    
#     return score


#codewars 5