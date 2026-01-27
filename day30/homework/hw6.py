# 6) შექმენით სტრინგებით სავსე სია, წაშალეთ ის სტრინგ მონაცემთა ტიპის ელემენტები რომლებიც არიან 5-ზე მეტი სიგრძეში ან დგანან კენტ ინდექსზე. გამოიყენეთ remove() ფუნქცია.

words = ["apple", "banana", "car", "elephant", "dog", "house"]

i = 0
while i < len(words):
    if len(words[i]) > 5 or i % 2 == 1:
        words.remove(words[i])
    else:
        i += 1

print(words)