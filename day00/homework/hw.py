from turtle import *
#we want to paint a house

#step 1:  draw a square
width(8)
color("red")
forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)
#end of square

#drawing door
begin_fill()
forward(70)
color("blue")
left(90)
forward(100) #height of the door
right(90)
forward(60)
right(90)
forward(100)
end_fill()
#end of door drawing

penup()
goto(200, 200)
pendown()

color("yellow")
begin_fill()
right(150)
forward(200)
left(120)
forward(200)
end_fill()

penup()
goto(35, 170)
pendown()
color("brown")
begin_fill()
left(120)
forward(35)
right(90)
forward(35)
right(90)
forward(35)
right(90)
forward(35)
right(90)
end_fill()

penup()
goto(130, 170)
pendown()
begin_fill()
forward(35)
right(90)
forward(35)
right(90)
forward(35)
right(90)
forward(35)
right(90)
end_fill()
exitonclick() 