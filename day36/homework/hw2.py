# 2) შექმენი ფუქნცია რომელიც მიიღებს რაღაც ტექსტს და დაითვლის ამ ტექსტში ხმოვნების რაოდენობას


def vowels(text, count, vowel):
    
    
    for i in text:
        if i in vowel:
            count +=1

    print(count)



vowels("goa loriented", 0, "aeiou")

