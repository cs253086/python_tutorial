def show_title():
    print("=== TREASURE HUNT ===")


def get_move():
    return input("Move (left/right): ")


def apply_move(move, score):
    if move == "left":
        print("Treasure found! +10")
        return score + 10
    if move == "right":
        print("Empty room.")
        return score
    print("Invalid move.")
    return score


def main():
    show_title()
    score = 0
    move = get_move()
    score = apply_move(move, score)
    print("Score:", score)


if __name__ == "__main__":
    main()
