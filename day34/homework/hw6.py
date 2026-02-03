#6) შექმენით ფუნქცია. მომხმარებელს შემოატანინე წინადადება. იპოვე და დაბეჭდე ყველაზე გრძელი სიტყვა ამ წინაwhiდადებაში. გამოიყენეთ while ციკლი. გამოიძახეთ ფუნქცია.

def sentence_inp():
    sentence = input("enter any sentence: ")

    words = sentence.split()

    i = 0

    longest = ""

    while i < len(words):
        if len(words[i]) > len(longest):
            longest = words[i]
        i = i + 1

    print(longest)

sentence_inp()

        