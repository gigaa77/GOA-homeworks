# 5)
# მომხმარებელმა შეიყვანოს ქულა (0–100).
# თუ ქულა მეტია 50-ზე, შიგნით შეამოწმე:

#   თუ მეტია 90-ზე, დაბეჭდე "შესანიშნავი"

#   თუ არა — "გასული ხარ"

# სხვა შემთხვევაში დაბეჭდე - "დაბალი ქულა"


score = int(input("enter your score: (0-100): "))

if score > 50:
    if score > 90:
        print("excellent job")
    else:
        ("you passed an exam")
else:
    print("low score")