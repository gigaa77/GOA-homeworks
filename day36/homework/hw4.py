# 4) შექმენი ფუნქცია რომელიც მიიღებს სიტყვების სიას და დააბრუნებს მხოლოდ იმ სიტყვებს რომლებიც იწყება დიდი ასოთი


def cap_let(list1, list2):

    for i in words:
        if i[0].isupper():
            result.append(i)
        
    print(result)


words = ["Batumi", "paris", "Goa", "basketball"]

result = []

cap_let(words, result)