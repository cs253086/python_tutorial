def main():
    score = 0
    turn = 1

    while turn <= 3:
        move = input("Turn " + str(turn) + " - move (left/right): ")

        if move == "left":
            score = score + 10
            print("Treasure! +10")
        elif move == "right":
            print("Nothing here.")
        else:
            print("Invalid move.")

        print("Score:", score)
        turn = turn + 1

    print("Final score:", score)


if __name__ == "__main__":
    main()
