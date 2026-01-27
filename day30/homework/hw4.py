#4) შექმენით სტრინგის ცვლადი და ცარიელი სია. სტრინგში მყოფი დიდი ასოები გახადეთ პატარა და ამ სიაში ჩაამატეთ, ხოლო სტრინგში მყოფი პატარა ასოები გახადეთ დიდი და ასევე ჩააგდეთ ამ სიაში. დაპრინტეთ საბოლოო სია, გამოიყენეთ while ციკლი.


name = "GoAl"
result = []

i = 0
while i < len(name):
    if name[i] == name[i].upper():
        result.append(name[i].lower())
    else:
        result.append(name[i].upper())
    i += 1

print(result)