#12) დაწერეთ ფუნქცია სახელად sumDigits, რომელიც არგუმენტად იღებს რიცხვს და აბრუნებს მისი ციფრების ჯამს.


def sumDigits(num1):
    total = 0
    for i in str(num1):
       total += int(i)
    print(total)

sumDigits(154)