#6) მომხმარებელს შემოაყვანინე რიცხვები, შექმენი ორი სია დადებითი და უარყოფითი სიებისთვის, დადებითი რიცხვები დაამატე დადებითი რიცხვებისთვის განკუთვნილ სიაში, უარყოფითი რიცხვები კი პირიქით

nums_positive = []

nums_negative = []


for i in range(0, 5):

    num = int(input("enter any number: "))

    if num > 0:
        nums_positive.append(num)
    else:
        nums_negative.append(num)

print(nums_negative)

print(nums_positive)