#4) შექმენით ფუნქცია. მომხმარებელს შემოატანინეთ წინადადების სტრინგი. დათვალე, რამდენი სიტყვის სიგრძე არის 4-ზე მეტი. დაპრინტე ასეთი სიტყვების რაოდენობა. დაწერეთ ეს დავალება ორნაირად - split() ფუნქციით და split() ფუნქციის გარეშე.

def sentences():
    sentence = input("enter any sentence: ")

    count = 0

    names = sentence.split()

    for i in names:
        if len(i) > 4:
            count +=1
    print(count)
    
sentences()