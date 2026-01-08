# მომხმარებელს შეაყვანინე სიმბოლოები.
# თუ სიმბოლო არის ხმოვანი (a, e, i, o, u) → დაამატე ერთ სიაში,
# სხვა შემთხვევაში → სხვა სიაში.
# ბოლოს დაბეჭდე ორივე სია.


vowel = []

consonant = []

while True:

    simbol = input(" enter any simbol: (type stop to end: )")

    if simbol == "stop":
        break

    if simbol == "a" or simbol == "e" or simbol == "i" or simbol == "o" or simbol == "u":
        vowel.append(simbol)

    else:
        consonant.append(simbol)

print(vowel)

print(consonant)