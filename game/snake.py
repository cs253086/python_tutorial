"""Reference copy of the Snake game the kid builds across Classes 1-12.

This is the final version (end of Class 12). The kid builds it up
step by step in their own trinket. The lesson files are the source of
truth for pacing; this file is just the "finished" snapshot.
"""
import turtle
import random

screen = turtle.Screen()
screen.title("Snake")
screen.bgcolor("#4A752C")
screen.setup(500, 500)

pen = turtle.Turtle()
pen.hideturtle()
pen.penup()
pen.shape("square")


def draw_board():
    for row in range(20):
        for col in range(20):
            x = -200 + col * 20
            y = -200 + row * 20
            if (row + col) % 2 == 0:
                pen.color("#AAD751")
            else:
                pen.color("#A2D149")
            pen.goto(x, y)
            pen.stamp()


draw_board()

snake = [(-40, 0), (-20, 0), (0, 0)]

snake_pen = turtle.Turtle()
snake_pen.hideturtle()
snake_pen.penup()
snake_pen.shape("square")
snake_pen.color("#4673E8")

apple_pen = turtle.Turtle()
apple_pen.hideturtle()
apple_pen.penup()
apple_pen.shape("circle")
apple_pen.color("#E74C3C")

apple = [0, 0]
score = [0]

score_pen = turtle.Turtle()
score_pen.hideturtle()
score_pen.penup()
score_pen.color("white")
score_pen.goto(-230, 220)


def draw_score():
    score_pen.clear()
    score_pen.write(f"Score: {score[0]}", font=("Arial", 16, "bold"))


def draw_snake():
    snake_pen.clear()
    for part in snake:
        snake_pen.goto(part)
        snake_pen.stamp()


def place_apple():
    apple[0] = random.randint(0, 19) * 20 - 200
    apple[1] = random.randint(0, 19) * 20 - 200
    apple_pen.goto(apple[0], apple[1])


def game_over():
    game_over_pen = turtle.Turtle()
    game_over_pen.hideturtle()
    game_over_pen.penup()
    game_over_pen.color("white")
    game_over_pen.goto(0, 20)
    game_over_pen.write(
        "GAME OVER",
        align="center",
        font=("Arial", 32, "bold"),
    )
    game_over_pen.goto(0, -20)
    game_over_pen.write(
        f"Score: {score[0]}",
        align="center",
        font=("Arial", 20, "bold"),
    )


direction = [20, 0]


def move():
    head = snake[-1]
    new_head = (head[0] + direction[0], head[1] + direction[1])

    if (
        new_head[0] < -200
        or new_head[0] > 180
        or new_head[1] < -200
        or new_head[1] > 180
    ):
        game_over()
        return

    if new_head in snake:
        game_over()
        return

    snake.append(new_head)

    if new_head[0] == apple[0] and new_head[1] == apple[1]:
        score[0] = score[0] + 1
        draw_score()
        place_apple()
        apple_pen.clear()
        apple_pen.stamp()
    else:
        snake.pop(0)

    draw_snake()
    screen.ontimer(move, 150)


def go_up():
    direction[0] = 0
    direction[1] = 20


def go_down():
    direction[0] = 0
    direction[1] = -20


def go_left():
    direction[0] = -20
    direction[1] = 0


def go_right():
    direction[0] = 20
    direction[1] = 0


screen.listen()
screen.onkey(go_up, "Up")
screen.onkey(go_down, "Down")
screen.onkey(go_left, "Left")
screen.onkey(go_right, "Right")

place_apple()
apple_pen.stamp()
draw_score()
move()

screen.mainloop()
