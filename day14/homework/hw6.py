#მომხმარებელს შემოატანინე რიცხვი, მანამ სანამ არ შემოიტანს  ტექტს - 'გამოთვალე საშუალო'. როგორც კი ამ ტექტს შემოიყვანს დაპრინტეთ ყველა შემოტანილი რიცხვის საერთო საშუალო არითმეტიკული.

number = input("enter a number or type 'calculate average' to calculate average: ")
sum_numbers= 0 
count_numbers=0

while number != "calculate average":
    count_numbers = count_numbers +1
    sum_numbers = sum_numbers + float(number)
    number= input ("enter a number or type'calculate average' to calculate average: ")

average= sum_numbers/count_numbers
print(average)



