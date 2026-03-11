#codewars1

# def accum(st):
#     result = ""
#     n = 0
    
#     for i in st:
#         part = i.upper() + i.lower() * n
        
#         if result == "":
#             result = part
#         else:
#             result = result + "-" + part
            
#         n = n + 1
        
#     return result






#codewars2

# def litres(time):
#     return int(time * 0.5)





#codewars3

# def to_jaden_case(s):
#     words = s.split()
#     result = ""
    
#     for w in words:
#         word = w[0].upper() + w[1:].lower()
#         if result == "":
#             result = word
#         else:
#             result = result + " " + word
    
#     return result




#codewars4

# def lovefunc( flower1, flower2 ):
#     if flower1 % 2 ==0 and flower2 % 2 !=0 or flower2 % 2 ==0 and flower1 % 2 !=0:
#         return True
#     else:
#         return False






#codewars5

# def maps(a):
#     new = []
#     for i in a:
#         i = i * 2
#         new.append(i)
#     return new





#codewars6

# def solution(text, ending):
#     if text.endswith(ending):
#         return True
#     else:
#         return False