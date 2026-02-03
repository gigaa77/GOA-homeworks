#1) შექმენით ფუნქცია. მომხმარებელს შემოატანინეთ ერთი მთელი რიცხვი n. დაბეჭდეთ თუ რამდენი ლუწი რიცხვია 1-დან n-მდე. გამოიძახეთ ფუნქცია.

def count_nums():
    count = 0
    num = int(input("enter an integer: "))
    
    for i in range(1, num + 1):
        if i % 2 == 0:
            count += 1

    print(count)
    
count_nums()