#8) შექმენით ფუნქცია. მომხმარებელს შემოატანინეთ ტექსტი, სტრინგი, სადაც იქნება ასოებიც და ციფრებიც. დაბეჭდეთ ტექსტში არსებული ყველა ციფრის ჯამი. მაგალითად: თუ მოცემული გვქონდა სტრინგი "a2b5c1", უნდა დავბეჭდოთ 8, რადგან 2 + 5 + 1 = 8.  გამოიძახეთ ფუნქცია.


def find_total():
    user_input = input("enter any word, it must involve digits: ")

    i = 0 
    total = 0

    while i < len(user_input):
        
        if user_input[i].isdigit():

            total += int(user_input[i])
        i = i + 1

    print(total)

find_total()