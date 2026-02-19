import random


def main():
    score = 0
    lives = 3

    for turn in range(1, 6):
        event = random.choice(["trap", "treasure", "empty"])
        print("Turn", turn, "- event:", event)

        if event == "trap":
            lives = lives - 1
            print("You lost 1 life.")
        elif event == "treasure":
            score = score + 10
            print("You gained 10 score.")
        else:
            print("Nothing happened.")

        print("Score:", score, "| Lives:", lives)

        if lives <= 0:
            print("Game over.")
            break


if __name__ == "__main__":
    main()
