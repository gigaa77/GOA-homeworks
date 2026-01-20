#4)შექმენი სია და შეიყვანე სტრიგნები პატარა ასოებით,შენი დავალებაა შეამოწმო,თუ სტრინგი შეიცავს 5 ასოზე მეტს მაშინ ასეთი სიტყვები ჩაამატე ახალ სიაში ოღონდ პირველი ასო ქონდეთ დიდი ,ხოლო თუ სიტყვა შეიცავს 5 ასოზე ნაკლებს მაშინ დაამატე ეს ელემენტებიც სიაში ოღონდ ყველა ასო ქონდეთ დიდი



frutis = ["apple", "banana", "orange", "kiwi", "pineapple", "lime"]


newfruits = []

for i in frutis:

    if len(i) >= 5:
        newfruits.append(i.capitalize())
    else:
        newfruits.append(i.upper())

print(newfruits)