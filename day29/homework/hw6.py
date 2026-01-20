#6)მომხმარებელს შემოატანინე რაიმე სტრინგი,შენი დავალებაა დაითვალო თუ რამდენი ცალი ხმოვანი და რამდენი ცალი თანხმოვანი გვხვდება მის მიერ შემოყვანილ სტრინგში

name = input("enter your favourite fruit: ")

vowels = ["a", "o", "u", "e", "i"]

vowel_count = 0

cons_count = 0

for i in name:

    if i in vowels:

        vowel_count+= 1
    else:
        
        cons_count+=1

print(vowel_count)

print(cons_count)